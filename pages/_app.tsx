import { AppProps } from "next/app";
import Head from "next/head";


export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
            </Head>
            <main>
                <Component { ...pageProps } />
                <footer>
                    <p>&#169; { (new Date()).getFullYear() } Spencer Carver</p>
                </footer>
            </main>
        </>
    );
};
