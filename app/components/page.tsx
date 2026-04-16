import { Metadata } from "next";
import { docsConfig } from "@/lib/docs-config";
import { generateComponentCatalogSchema } from "@/lib/seo-config";
import ComponentsGalleryClient from "./components-gallery-client";

export const metadata: Metadata = {
    title: "All Components - Browse React UI Components",
    description:
        "Explore the complete Nyxhora UI component library. Beautiful, accessible React components with Tailwind CSS and Framer Motion animations. Buttons, cards, dialogs, navigation, effects, and more.",
    keywords: [
        "React UI components",
        "Tailwind CSS components",
        "Framer Motion components",
        "Next.js components",
        "shadcn alternative",
        "React component library 2026",
        "copy paste React components",
        "free React UI components",
    ],
    openGraph: {
        title: "All Components - Nyxhora UI",
        description:
            "Browse React UI components. Beautiful, accessible, animated. Built with Tailwind CSS and Framer Motion.",
        url: "https://ui.nyxhora.com/components",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Nyxhora UI Components Catalog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "All Components - Nyxhora UI",
        description:
            "Browse React UI components. Beautiful, accessible, animated. Built with Tailwind CSS and Framer Motion.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://ui.nyxhora.com/components",
    },
};

export default function ComponentsPage() {
    const allComponents = docsConfig
        .filter((cat) => cat.title !== "Getting Started")
        .flatMap((cat) => cat.items)
        .sort((a, b) => a.title.localeCompare(b.title));

    const catalogSchema = generateComponentCatalogSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(catalogSchema),
                }}
            />
            <ComponentsGalleryClient allComponents={allComponents} />
        </>
    );
}
