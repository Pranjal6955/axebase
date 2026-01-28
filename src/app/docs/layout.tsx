import { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: {
        default: 'Axe.ai Documentation',
        template: '%s | Axe.ai Docs'
    },
    description: 'Complete documentation for Axe.ai - Your AI-powered platform for modern applications',
    keywords: ['Axe.ai', 'documentation', 'API', 'guides', 'tutorials'],
    openGraph: {
        title: 'Axe.ai Documentation',
        description: 'Complete documentation for Axe.ai platform',
        type: 'website'
    }
}

const banner = <Banner storageKey="axe-ai-banner">🚀 Welcome to Axe.ai Documentation - Your AI-powered platform!</Banner>
const navbar = (
    <Navbar
        logo={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                <span style={{ fontSize: '24px' }}>⚡</span>
                <span>Axe.ai</span>
            </div>
        }
        projectLink="https://github.com/Pranjal6955/axebase"
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Axe.ai. Built with ❤️</Footer>

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head>
                {/* Your additional head options */}
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                    footer={footer}
                // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}