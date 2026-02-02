import { ReactNode } from "react";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./docs.css";
import { LogoSwitcher } from "@/components/logo-switcher";

export const metadata = {
  title: {
    default: "Axebase Documentation",
    template: "%s | Axebase Docs",
  },
  description:
    "Complete documentation for Axebase - Your AI-powered platform for modern applications",
  keywords: ["Axebase", "documentation", "API", "guides", "tutorials"],
  openGraph: {
    title: "Axebase Documentation",
    description: "Complete documentation for Axebase platform",
    type: "website",
  },
};

const banner = (
  <Banner storageKey="axebase-banner">
    🚀 Welcome to Axebase Documentation - Your AI-powered platform!
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
        }}
      >
        <LogoSwitcher width={24} height={24} />
        <span>Axebase</span>
      </div>
    }
    projectLink="https://github.com/Pranjal6955/axebase"
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © Axebase. Built with ❤️</Footer>
);

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const allPages = await getPageMap();
  const docsFolder = allPages.find((page: any) => page.route === "/docs");
  const docsPages = (docsFolder as any)?.children || [];

  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={docsPages}
      docsRepositoryBase="https://github.com/Pranjal6955/axebase/tree/main/src/app/docs"
      footer={footer}
    >
      {children}
    </Layout>
  );
}
