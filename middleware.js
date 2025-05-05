import { NextResponse } from 'next/server';
import { supportedLanguages, defaultLocale } from './lib/i18n-config';

export function middleware(request) {
    const { pathname } = request.nextUrl; // Get the current path

    const headers = request.headers; // Access HTTP request headers
    const acceptLanguage = headers.get('accept-language') || defaultLocale; // Try to get browser's language

    // Skip internal or static files (e.g. Next.js internals or favicon)
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') // For files like .js, .ico, .png
    ) {
        return NextResponse.next(); // Let Next.js handle this without interference
    }

    // Check if the pathname already includes a locale (e.g. /en/about)
    const isLocaleInPath = supportedLanguages.some((lang) =>
        pathname.startsWith(`/${lang}`)
    );

    if (!isLocaleInPath) {
        // Extract the language from Accept-Language header (e.g. "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7")
        const preferredLocale = supportedLanguages.find((lang) =>
            acceptLanguage.toLowerCase().startsWith(lang)
        ) || defaultLocale;

        // Construct the redirect URL, adding the locale prefix
        const redirectUrl = new URL(`/${preferredLocale}${pathname}`, request.url);

        // Redirect to the new URL
        return NextResponse.redirect(redirectUrl);
    }

    // If locale is already in the path, continue normally
    return NextResponse.next();
}
