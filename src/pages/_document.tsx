import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta
                    httpEquiv="Cache-Control"
                    content="no-cache, no-store, must-revalidate"
                />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
                <meta name="description" content="Portfolio" />
                <meta httpEquiv="imagetoolbar" content="no" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
