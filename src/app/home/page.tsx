'use client';

import { Card } from '@/components/ui/card';
import { UserNav } from './_components/userNav';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendMessageFormSchema } from '@/lib/zod';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
import config from '@/lib/config';

type SendMessageFormSchema = z.infer<typeof sendMessageFormSchema>;

interface IMessages {
  id: string;
  userName: string;
  userId: string;
  content: string;
}
export default function Home() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [connected, setConnected] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const form = useForm<SendMessageFormSchema>({
    resolver: zodResolver(sendMessageFormSchema),
    defaultValues: {
      message: '',
    },
  });

  async function handleSendMessage(data: SendMessageFormSchema) {
    const { message } = data;

    if (message && ws) {
      const msg: IMessages = {
        id: uuidv4(),
        userId: session?.user.id as string,
        userName: `${session?.user.firstName} ${session?.user.lastName}`,
        content: message,
      };
      ws.send(JSON.stringify(msg));
    }
    form.reset();
  }
  useEffect(() => {
    const socket = new WebSocket(`ws://${config.host}:3001/ws`);
    socket.onopen = () => {
      setConnected(true);
      console.log('connected');
    };

    socket.onmessage = (event) => {
      const msg: IMessages = JSON.parse(event.data);
      setMessages((prevMessages) => {
        const isDuplicate = prevMessages.some(
          (message) => message.id === msg.id
        );
        if (isDuplicate) {
          return prevMessages;
        }
        return [msg, ...prevMessages];
      });
    };
    socket.close = () => {
      setConnected(false);
      console.log('connection close');
    };
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  if (!session) return;

  return (
    <div className='flex h-screen flex-col'>
      <header className='flex w-full items-center justify-between border-b p-4'>
        <div className='flex items-center gap-2'>
          <div
            className={`size-3 rounded-full ${connected ? 'bg-green-700' : 'bg-red-600'}`}
          />
          <p>{connected ? 'online' : 'offline'}</p>
        </div>
        <UserNav />
      </header>
      <main className='flex flex-1 items-center justify-center sm:p-16'>
        <Card className='flex size-full flex-col space-y-4 p-4'>
          <div className='flex h-[648px] w-full snap-y snap-mandatory flex-col-reverse gap-2 overflow-y-auto p-4'>
            {messages.map((message) =>
              message.userId === session?.user.id ? (
                <div className='flex justify-end' key={message.id}>
                  <Card className='w-fit max-w-[680px] break-words p-4'>
                    <p>{message.content}</p>
                  </Card>
                </div>
              ) : (
                <div className='' key={message.id}>
                  <Card className='w-fit max-w-[680px] break-words p-4'>
                    <h2 className='font-bold'>{message.userName}</h2>
                    <p>{message.content}</p>
                  </Card>
                </div>
              )
            )}
          </div>
          <div className='flex w-full space-x-4 p-4'>
            <Form {...form}>
              <form
                className='flex w-full space-x-4'
                onSubmit={form.handleSubmit(handleSendMessage)}
              >
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input
                          className='flex-1'
                          placeholder='Type a Message...'
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type='submit' className='flex items-center space-x-2'>
                  <span className='text-lg'>Send</span>
                  <Send />
                </Button>
              </form>
            </Form>
          </div>
        </Card>
      </main>
    </div>
  );
}
