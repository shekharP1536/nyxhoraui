import { Metadata } from "next";
import PlaygroundClient from "./playground-client";

export const metadata: Metadata = {
    title: "Playground",
    description: "Experimental playground for internal UI exploration.",
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: "https://ui.nyxhora.com/playground",
    },
};

export default function PlaygroundPage() {
    return <PlaygroundClient />;
}