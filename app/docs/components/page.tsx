import { Metadata } from "next";
import { generateComponentMetadata, generateComponentCatalogSchema } from "@/lib/seo-config";
import ComponentsIndexContent from "./_content";

export const metadata: Metadata = {
    title: "All Components - Browse React UI Components",
    description: "Explore the complete Nyxhora UI component library. Beautiful, accessible React components with Tailwind CSS and Framer Motion animations.",
    keywords: ["React UI components", "component library", "Tailwind CSS", "Framer Motion", "shadcn alternative", "Next.js components"],
    openGraph: {
        title: "All Components - Nyxhora UI",
        description: "Browse beautiful React UI components. Copy-paste into your Next.js project.",
        url: "https://ui.nyxhora.com/docs/components",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Nyxhora UI Components",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "All Components - Nyxhora UI",
        description: "Browse beautiful React UI components. Copy-paste into your Next.js project.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://ui.nyxhora.com/docs/components",
    },
};

export default function ComponentsIndexPage() {
    const catalogSchema = generateComponentCatalogSchema();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
            />
            <ComponentsIndexContent />
        </>
    );
}
