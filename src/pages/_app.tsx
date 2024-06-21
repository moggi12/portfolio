import type { AppProps } from "next/app"
import Head from "next/head"
import Page from "components/Layout/page"
import "../styles/globals.css"

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>                                   
            <Page>
                <Component
                    {...pageProps}
                    key={router.asPath}
                />
            </Page>
        </>
    )
}
