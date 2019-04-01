import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const GA_TRACKING_ID = '[TODO: GA-TRACKING-ID-HERE]'

export default class extends Document {
    static getInitialProps ({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render () {
        return (
            <html>
                <Head>
                    <meta property="og:title" content="[TODO: TITLE-HERE]" />
                    <meta property="og:description" content="[TODO: DESCRIPTION-HERE]" />
                    <meta property="og:image" content="[TODO: IMAGE-URL-HERE]" />
                    <meta property="og:site_name" content="[TODO: SITE-NAME-HERE]" />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}');
                    `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

