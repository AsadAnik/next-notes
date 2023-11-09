import { NextResponse } from "next/server";

/**
 * ==== API CHECK ====
 * @returns 
 */
export const GET = async () => {
    return NextResponse.json({
        message: 'API Health Is Perfect!',
    });
};