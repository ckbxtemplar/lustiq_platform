import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { getUser } from '@/app/lib/data';
import bcrypt from 'bcrypt';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
					const hashedPassword = await bcrypt.hash(password,10);		// kézzel hash, mert az adatbázisban plain			
          const passwordsMatch = await bcrypt.compare(user.password, hashedPassword);

          if (passwordsMatch) return user;
        }

				console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});