// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    // Basic info
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const timestamp = new Date().toISOString();
    const path = request.nextUrl.pathname;
    const method = request.method;
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // CloudFlare specific info
    const country = request.headers.get('cf-ipcountry') || 'unknown';
    const city = request.headers.get('cf-ipcity') || 'unknown';
    const region = request.headers.get('cf-region') || 'unknown';
    const timezone = request.headers.get('cf-timezone') || 'unknown';
    const continent = request.headers.get('cf-continent') || 'unknown';
    const latitude = request.headers.get('cf-iplatitude') || 'unknown';
    const longitude = request.headers.get('cf-iplongitude') || 'unknown';
    const isBot = request.headers.get('cf-bot') || 'unknown';
    const device = request.headers.get('cf-device-type') || 'unknown';
    const browserFamily = request.headers.get('cf-client-browser-family') || 'unknown';
    const osFamily = request.headers.get('cf-client-os-family') || 'unknown';
    const asn = request.headers.get('cf-asn') || 'unknown';
    const isp = request.headers.get('cf-isp') || 'unknown';
    const tlsVersion = request.headers.get('cf-tls-version') || 'unknown';
    const requestId = request.headers.get('cf-ray') || 'unknown';

    // Log everything in a structured way
    console.log(JSON.stringify({
        timestamp,
        request: {
            ip,
            method,
            path,
            userAgent,
            requestId
        },
        location: {
            country,
            city,
            region,
            continent,
            timezone,
            latitude,
            longitude
        },
        client: {
            isBot,
            device,
            browser: browserFamily,
            os: osFamily
        },
        network: {
            asn,
            isp,
            tlsVersion
        }
    }, null, 2));

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};