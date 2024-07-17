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

type SendMessageFormSchema = z.infer<typeof sendMessageFormSchema>;

export default function Home() {
  const form = useForm<SendMessageFormSchema>({
    resolver: zodResolver(sendMessageFormSchema),
  });

  async function handleSendMessage(data: SendMessageFormSchema) {
    console.log(data);
  }

  return (
    <div className='flex h-screen flex-col'>
      <header className='flex w-full justify-end border-b p-4'>
        <UserNav />
      </header>
      <main className='flex flex-1 items-center justify-center p-20'>
        <Card className='flex size-full flex-col space-y-4 p-4'>
          <div className='flex-1 p-4'></div>
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
