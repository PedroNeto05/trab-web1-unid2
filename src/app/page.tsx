import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>uma landing page qualquer</h1>

      <Link href='/auth/sign-in'>sign-in</Link>
    </div>
  );
}
