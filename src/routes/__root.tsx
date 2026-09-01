import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Jack Manuel Fitness";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jack Manuel Fitness — Raw Power Coaching Lagos" },
      {
        name: "description",
        content:
          "Jack Manuel Fitness Limited — 1:1 coaching, group training, and brand bookings in Lagos, Nigeria. Raw power. Real strength. Book a session with Coach Okoro Ogbonna.",
      },
      { name: "theme-color", content: "#0a0a0b" },
      { name: "color-scheme", content: "dark" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Okoro Ogbonna (Jack Manuel)" },
      { name: "keywords", content: "personal trainer Lagos, strength coach Nigeria, 1:1 coaching Lagos, Jack Manuel Fitness, gym Lagos, Hustle Gang fitness" },
      /* Open Graph */
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jack Manuel Fitness" },
      { property: "og:title", content: "Jack Manuel Fitness — Raw Power Coaching Lagos" },
      {
        property: "og:description",
        content:
          "1:1 coaching, group sessions & brand bookings in Lagos. Strength that is real — not a filter. Book Coach Jack Manuel today.",
      },
      { property: "og:image", content: "/images/jack-coach.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Jack Manuel — Head Coach & Founder, Lagos Nigeria" },
      /* Twitter / X card */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jack Manuel Fitness — Raw Power Coaching Lagos" },
      {
        name: "twitter:description",
        content: "1:1 coaching, group sessions & brand bookings in Lagos. Strength that is real. Book Coach Jack Manuel today.",
      },
      { name: "twitter:image", content: "/images/jack-coach.jpg" },
      { name: "twitter:image:alt", content: "Jack Manuel — Head Coach & Founder, Lagos Nigeria" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg font-sans min-h-screen">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
