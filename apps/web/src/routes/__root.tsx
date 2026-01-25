import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import Header from "../components/Header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "JS DevTools | Privacy First | 100% Client-Side Web Utilities",
      },
      {
        name: "description",
        content:
          "Free, private, and fast developer tools. Convert images to Base64, compress, crop, and convert formats, format JSON and convert image to pdf instantly. 100% client-side—your data never leaves your browser.",
      },
      {
        meta: "og:type",
        content: "website",
      },
      {
        meth: "og:url",
        content: "https://js-devtools.sidme.dev/",
      },
      {
        property: "og:title",
        content: "JS DevTools | Privacy First | 100% Client-Side Web Utilities",
      },
      {
        property: "og:description",
        content:
          "Free, private, and fast developer tools. 100% client-side—your data never leaves your browser.",
      },
      {
        property: "og:image",
        content: "https://js-devtools.sidme.dev/screenshot.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "JS DevTools | Privacy First | 100% Client-Side Web Utilities",
      },
      {
        name: "twitter:description",
        content:
          "Free, private, and fast developer tools. 100% client-side—your data never leaves your browser.",
      },
      {
        name: "twitter:image",
        content: "https://js-devtools.sidme.dev/screenshot.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: "https://js-devtools.sidme.dev/",
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
