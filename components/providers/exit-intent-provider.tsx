"use client";

import React, { createContext, useContext, useState } from "react";

interface ExitIntentContextType {
    isActive: boolean;
    enableExitIntent: () => void;
    disableExitIntent: () => void;
    temporaryDisable: (duration: number) => void;
}

const ExitIntentContext = createContext<ExitIntentContextType | undefined>(undefined);

export function ExitIntentProvider({ children }: { children: React.ReactNode }) {
    const [isActive, setIsActive] = useState(true);

    const enableExitIntent = () => setIsActive(true);
    const disableExitIntent = () => setIsActive(false);
    const temporaryDisable = (duration: number) => {
        setIsActive(false);
        setTimeout(() => setIsActive(true), duration);
    };

    return (
        <ExitIntentContext.Provider value={{ isActive, enableExitIntent, disableExitIntent, temporaryDisable }}>
            {children}
        </ExitIntentContext.Provider>
    );
}

export function useExitIntentContext() {
    const context = useContext(ExitIntentContext);
    if (context === undefined) {
        throw new Error("useExitIntentContext must be used within a ExitIntentProvider");
    }
    return context;
}
