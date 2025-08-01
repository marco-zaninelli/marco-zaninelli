import Document, {Html, Head, Main, NextScript} from "next/document";

import Logo_32 from "@/public/logo_32.png"
import Logo_16 from "@/public/logo_16.png"
import AppleTouchLogo from "@/public/apple-touch-icon.png"
import Manifest from "@/public/site.webmanifest"

class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    {/* Favicon and Icons */}
                    <link rel="icon" type="image/png" sizes="32x32" href={Logo_32} />
                    <link rel="icon" type="image/png" sizes="16x16" href={Logo_16} />
                    <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchLogo} />
                    <link rel="manifest" href={Manifest} />
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
