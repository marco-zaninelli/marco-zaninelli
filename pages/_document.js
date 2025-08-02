import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    {/* Charset e Viewport */}
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* Robots */}
                    <meta name="robots" content="index, follow" />

                    {/* Manifest per PWA */}
                    <link rel="manifest" href="/site.webmanifest" />

                    {/* Favicon and Icons */}
                    <link rel="icon" type="image/png" sizes="32x32" href="/logo_32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/logo_16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="theme-color" content="#000000" />

                    {/* Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
                        rel="stylesheet"
                    />

                    {/* Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
