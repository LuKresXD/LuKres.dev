// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const THREAD_ID = process.env.TELEGRAM_THREAD_ID;

async function sendToTelegram(message: string) {
    if (!BOT_TOKEN || !CHAT_ID) {
        console.error('Telegram credentials not configured');
        return;
    }

    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                message_thread_id: THREAD_ID,
                text: message,
                parse_mode: 'HTML',
            }),
        });
    } catch (error) {
        console.error('Error sending to Telegram:', error);
    }
}

export async function middleware(request: NextRequest) {
    // Get all headers
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
        headers[key.toLowerCase()] = value;
    });

    // Prepare headers for Telegram
    const headersText = Object.entries(headers)
        .map(([key, value]) => `<b>${key}:</b> <code>${value}</code>`)
        .join('\n');

    // Basic info
    const ip = request.headers.get('x-real-ip') || request.ip || 'unknown';
    const timestamp = new Date().toISOString();
    const path = request.nextUrl.pathname;
    const method = request.method;
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Determine if it's likely a bot based on user agent
    const isBot = /bot|crawler|spider|crawling/i.test(userAgent) ? '🤖' : '👤';

    const message = `
${isBot} <b>New Visit</b>

<b>Request Info:</b>
🌐 IP: <code>${ip}</code>
🔗 Path: ${method} ${path}
⚙️ User Agent: ${userAgent}

<b>Headers:</b>
${headersText}

⏰ Timestamp: ${timestamp}
    `.trim();

    // Send to Telegram
    await sendToTelegram(message);

    // Log the processed information
    console.log('Processed request info:', {
        ip, path, method, headers, timestamp
    });

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
