import { NextResponse } from 'next/server';
import { updateUser } from '@/app/lib/data';

export async function POST(req: Request) {
    try {
				const { id, status } = await req.json();

        if (!id || !status) {
					return NextResponse.json(
							{ success: false, message: "Missing required parameters" },
							{ status: 400 }
					);
				}

        const success = await updateUser(id, { status:status, token:null });

        return NextResponse.json(
            { success, message: success ? "User status updated" : "Update failed" },
            { status: success ? 200 : 500 }
        );

    } catch (error) {
			console.error("Database error:", error);
			return NextResponse.json(
					{ success: false, message: "Internal server error" },
					{ status: 500 }
			);
    }
}
