import { ReactNode } from 'react';
import { ThemeToggle } from './_components/theme-toggle';
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className='h-screen'>
      <div className='absolute flex w-full justify-end p-4'>
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}
