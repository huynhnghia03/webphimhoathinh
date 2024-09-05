import { NextRequest, NextResponse } from 'next/server';
import { pageview } from '@/lib/analytics'; // Ensure this is correctly imported or defined

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    // Gửi pageview tới Google Analytics
    if (url) {
        pageview(url); // Ensure the 'pageview' function is properly defined
    }

    return NextResponse.json({ status: 'Pageview recorded' });
}
