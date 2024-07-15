'use client';

// importing necessary functions
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <p>
        Signed in as {session.user.email} {session.user.firstName}{' '}
        {session.user.lastName}
      </p>
    );
  }

  return <a href='/sign-in'>Sign in</a>;
}
