'use client';
import { Card } from '@/components/ui/card';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    return theme === 'light' ? 'dark' : 'light';
  }

  return (
    <Card
      onClick={() => setTheme(handleChangeTheme())}
      className='bg-background p-2'
    >
      {theme === 'light' ? (
        <Moon className='text-black' />
      ) : (
        <Sun className='text-white' />
      )}
    </Card>
  );
}
