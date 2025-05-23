import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    {/* Favicon and Icons */}
                    {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png TODO: add favicon 32x32" />*/}
                    {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png TODO: add favicon 16x16" />*/}
                    {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png TODO: add apple touch icon" />*/}
                    {/*<link rel="manifest" href="/site.webmanifest TODO: add manifest" />*/}
                    {/*<meta name="theme-color" content="#ffffff TODO: add color theme" />*/}

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
