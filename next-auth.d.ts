import { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }

  // eslint-disable-next-line no-unused-vars
  interface Account {}

  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  // eslint-disable-next-line no-unused-vars
  interface JWT {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}
