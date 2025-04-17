import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnDashboard = nextUrl.pathname.startsWith('/hu/dashboard');
			const countPathParts = nextUrl.pathname.split("/").filter(Boolean);
			const isOnDashboard = countPathParts[1] === "dashboard";
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } 
      return true;
    },

		async jwt({ token, user, trigger, session }: { token: any, user?: any, trigger?: string, session?: any }) {
			// Ha új user van (authentikációkor), mentjük az adatokat
			if (user) {
				token.user = {
					id: user.id,
					name: user.name,
					email: user.email,
					image: user.avatar,
					language: user.language
				};
			}
	
			// Ha a kliensoldalon frissítés (`update()`) történt
			if (trigger === "update" && session?.user) {
				token.user = { ...token.user, ...session.user }; // Frissítjük a JWT-t az új adatokkal
			}
	
			return token;
		},
	
		async session({ session, token }: { session: any, token: any }) {
			// Tokenből frissítjük a session adatait, így újratöltéskor is megmarad
			if (token?.user) {
				session.user = token.user;
			}
	
			return session;
		}		
  },
  providers: [],
} satisfies NextAuthConfig;