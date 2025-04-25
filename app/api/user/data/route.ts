import { NextResponse } from 'next/server';
import { getUser } from '@/app/lib/data';
import { auth } from '@/auth';

export async function POST(req: Request) {
    try {
				const { get } = await req.json();

        if (!get) {
					return NextResponse.json(
							{ success: false, message: "Missing required parameters (get)" },
							{ status: 400 }
					);
				}

				const session = await auth();
				const email = session?.user?.email!;

        if (!email) {
					return NextResponse.json(
							{ success: false, message: "Missing required parameters (email)" },
							{ status: 400 }
					);
				}

				const user = await getUser(email,get);
        return NextResponse.json(user);

    } catch (error) {
			console.error("Database error (getUser):", error);
			return NextResponse.json(
					{ success: false, message: "Internal server error" },
					{ status: 500 }
			);
    }
}
