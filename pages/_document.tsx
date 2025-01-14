import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <noscript>
                        <style dangerouslySetInnerHTML={{ __html: "body { visibility: visible; opacity: 1; }" }} />
                    </noscript>
                    <link href="https://fonts.googleapis.com/css?family=Lato&amp;display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/favicon.ico` } />
                    <link rel="manifest" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/manifest.json` } />
                    <meta name="referrer" content="unsafe-url" />
                    <meta name="referrer" content="always" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
