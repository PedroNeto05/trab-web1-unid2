import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { signOut } from 'next-auth/react';

export function UserNav() {
  const { data: session } = useSession();
  const userFullName = `${session?.user.firstName} ${session?.user.lastName}`;
  const { setTheme } = useTheme();
  function getFallbackName(fullName: string) {
    const names = fullName.split(' ');
    const initials = names.map((name) => name.charAt(0)).join('');
    return initials;
  }

  function handleLogOut() {
    signOut();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='size-10'>
            <AvatarImage alt='@shadcn' />
            <AvatarFallback>{getFallbackName(userFullName)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{userFullName}</p>
            <p className='text-xs leading-none text-muted-foreground'>
              {session?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System Theme
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light Theme
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark Theme
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
