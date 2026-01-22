import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostRoc - Composable API Data & Request Orchestration",
  description: "Generate mock data, orchestrate API requests, and build composable data templates for testing and development.",
  keywords: ["API", "mock data", "testing", "faker", "data generation", "request orchestration"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
