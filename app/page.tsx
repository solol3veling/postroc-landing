import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Terminal, Database, Workflow, Zap, Code2, FolderSync } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL('https://postroc.scalestash.com'),
  title: "PostRoc - Composable API Data & Request Orchestration",
  description: "Generate realistic mock data, orchestrate API requests, and build reusable data templates for testing, development, and API prototyping.",
  keywords: ["API", "mock data", "testing", "faker", "data generation", "request orchestration", "api development", "api testing"],
  openGraph: {
    title: "PostRoc - Composable API Data & Request Orchestration",
    description: "Generate mock data, orchestrate API requests, and build reusable data templates.",
    url: "https://postroc.scalestash.com",
    siteName: "PostRoc",
    images: [
      {
        url: "/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "PostRoc - Composable API Data & Request Orchestration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostRoc - Composable API Data & Request Orchestration",
    description: "Generate mock data, orchestrate API requests, and build reusable data templates.",
    creator: "@kaycy38494566", // Replace with your Twitter handle
    images: ["/og-image.png"], // Replace with your actual OG image URL
  },
};

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PostRoc",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cross-platform",
    "description": "Generate realistic mock data, orchestrate API requests, and build reusable data templates for testing, development, and API prototyping.",
    "url": "https://postroc.scalestash.com",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "ScaleStash"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center gap-2 font-semibold">
            <Database className="h-5 w-5" />
            <span>PostRoc</span>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </Link>
            <Link href="#cli" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              CLI
            </Link>
            <ThemeToggle />
            <Button asChild>
              <a href="https://app.postroc.scalestash.com">Open App</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Composable API Data & Request Orchestration
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Generate realistic mock data, orchestrate API requests, and build reusable data templates.
            Perfect for testing, development, and API prototyping.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://app.postroc.scalestash.com">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#demo">Watch Demo</a>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="demo" className="mt-16 mx-auto max-w-4xl">
          <div className="relative aspect-video rounded-lg border bg-muted overflow-hidden">
            {/* Video placeholder - replace src with actual video */}
            <video
              className="w-full h-full object-cover"
              poster="/video-poster.png"
              controls
              preload="metadata"
              aria-label="PostRoc Demo Video"
              title="PostRoc Demo Video"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Fallback overlay if no video */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted/80 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              <div className="text-center">
                <Play className="h-16 w-16 mx-auto text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">Demo video</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            See PostRoc in action - create workspaces, define fields, and generate mock data
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24 border-t">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need for API testing</h2>
          <p className="mt-4 text-muted-foreground">
            A complete toolkit for generating mock data and managing API requests
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Database className="h-10 w-10 mb-2 text-foreground" />
              <CardTitle>Mock Data Generation</CardTitle>
              <CardDescription>
                Generate realistic data with built-in faker methods. Support for strings, numbers, arrays, nested objects, and references.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Workflow className="h-10 w-10 mb-2 text-foreground" />
              <CardTitle>Request Orchestration</CardTitle>
              <CardDescription>
                Define endpoints, configure auth, set headers. Organize requests into workspaces, projects, and categories.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="h-10 w-10 mb-2 text-foreground" />
              <CardTitle>Composable Templates</CardTitle>
              <CardDescription>
                Create reusable field templates. Reference other customs to build complex nested data structures.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 mb-2 text-foreground" />
              <CardTitle>Instant Preview</CardTitle>
              <CardDescription>
                See generated data in real-time as you configure fields. Resolved view shows actual faker output.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Terminal className="h-10 w-10 mb-2 text-foreground" />
              <CardTitle>CLI Integration</CardTitle>
              <CardDescription>
                Sync workspaces to your machine. Generate data from the command line. Perfect for CI/CD and scripts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FolderSync className="h-10 w-10 mb-2 text-foreground" />
              <CardTitle>Local Storage</CardTitle>
              <CardDescription>
                All data stays in your browser. No account required. Export/import for backup and sharing.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CLI Section */}
      <section id="cli" className="container py-24 border-t">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Use from the command line</h2>
          <p className="mt-4 text-muted-foreground">
            Sync your workspace once, generate data anywhere
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <Card className="bg-zinc-950 text-zinc-50 border-zinc-800">
            <CardHeader className="border-b border-zinc-800 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-zinc-500">terminal</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <p><span className="text-zinc-500">$</span> npm install -g postroc-cli</p>
                <p><span className="text-zinc-500">$</span> postroc list customs</p>
                <p className="text-zinc-500 pl-4">
                  My API {">"} Users<br />
                  &nbsp;&nbsp;User Profile (custom-abc123...)<br />
                  &nbsp;&nbsp;Product (custom-def456...)
                </p>
                <p><span className="text-zinc-500">$</span> postroc generate "User Profile"</p>
                <p className="text-green-400 pl-4">Generated data for "User Profile" - copied to clipboard</p>
                <p><span className="text-zinc-500">$</span> postroc generate user --count 10 --output users.json</p>
                <p className="text-green-400 pl-4">Saved to users.json</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 border-t">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Ready to streamline your API testing?</h2>
          <p className="mt-4 text-muted-foreground">
            Start generating mock data in seconds. No sign-up required.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <a href="https://app.postroc.scalestash.com">
                Open PostRoc <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="font-medium">PostRoc</span>
            <span className="text-sm text-muted-foreground">by ScaleStash</span>
          </div>
          <p className="text-sm text-muted-foreground">contact@scalestash.com</p>
        </div>
      </footer>
    </div>
  );
}
