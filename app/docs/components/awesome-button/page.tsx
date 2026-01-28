"use client";

import { ParticleBurstButton } from "@/components/ui/awsomebutton";
import { CodeBlockWrapper, ComponentPreview, DocsHeader, DocsPreview, DocsProps } from "@/components/ui/docs-documentation";

export default function AwesomeButtonDocsPage() {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Awesome Button"
        description="A beautiful animated button with particle burst effects on click. Uses Framer Motion for smooth animations."
      />

      <DocsPreview
        title="Preview"
        previewCode={
          <div className="flex gap-4">
            <ParticleBurstButton>Click Me!</ParticleBurstButton>
            <ParticleBurstButton className="bg-gradient-to-r from-purple-500 to-pink-500">Magic ✨</ParticleBurstButton>
          </div>
        }
        code={`<ParticleBurstButton>Click Me!</ParticleBurstButton>

<ParticleBurstButton className="bg-gradient-to-r from-purple-500 to-pink-500">
  Magic ✨
</ParticleBurstButton>`}
      />

      <CodeBlockWrapper
        title="Installation"
        code={componentCode}
        language="tsx"
      />

      <CodeBlockWrapper
        title="Usage"
        code={`import { ParticleBurstButton } from "@/components/ui/awsomebutton"

export default function MyComponent() {
  return (
    <ParticleBurstButton>
      Click for particles!
    </ParticleBurstButton>
  )
}`}
        language="tsx"
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <DocsPreview
          variant="Custom Styling"
          previewCode={
            <div className="flex flex-wrap gap-4">
              <ParticleBurstButton className="bg-blue-500 hover:bg-blue-600">Blue</ParticleBurstButton>
              <ParticleBurstButton className="bg-green-500 hover:bg-green-600">Green</ParticleBurstButton>
              <ParticleBurstButton className="bg-red-500 hover:bg-red-600">Red</ParticleBurstButton>
            </div>
          }
          code={`<ParticleBurstButton className="bg-blue-500">Blue</ParticleBurstButton>
<ParticleBurstButton className="bg-green-500">Green</ParticleBurstButton>
<ParticleBurstButton className="bg-red-500">Red</ParticleBurstButton>`}
        />
      </section>

      <DocsProps
        props={[
          {
            name: "children",
            type: "ReactNode",
            description: "Button content",
            required: true,
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes",
          },
        ]}
      />

      <CodeBlockWrapper
        title="Dependencies"
        code={`npm install motion/react`}
        language="bash"
      />
    </div>
  );
}

const componentCode = `'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ParticleBurstButtonProps {
  children: React.ReactNode
  className?: string
}

export function ParticleBurstButton({
  children,
  className,
}: ParticleBurstButtonProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; angle: number }>
  >([])

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      angle: i * 36 * (Math.PI / 180),
    }))
    setParticles([...particles, ...newParticles])
  }

  return (
    <div className="relative">
      <motion.button
        className={cn(
          \`inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md
          bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow
          transition-colors\`,
          className
        )}
        whileTap={{ scale: 0.95 }}
        onClick={createParticles}
      >
        {children}
      </motion.button>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-fuchsia-300"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{
            scale: 0,
            x: Math.cos(particle.angle) * 100,
            y: Math.sin(particle.angle) * 100,
          }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => {
            setParticles(particles.filter((p) => p.id !== particle.id))
          }}
        />
      ))}
    </div>
  )
}`;
