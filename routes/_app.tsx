import { define } from "@/utils.ts";

export default define.page(function App({ Component, url }) {
  // /demo 以下はダークモード（sawtooth デフォルト）、それ以外はライトモード
  const isDemo = url.pathname.startsWith("/demo");
  const theme = isDemo ? undefined : "light";

  return (
    <html lang="ja" data-theme={theme}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sawcase</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/sawtooth.css" />
        <link rel="stylesheet" href="/sawcase.css" />
        <link rel="stylesheet" href="/theme.css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `body { font-family: 'Inter', system-ui, sans-serif; margin: 0; }`,
          }}
        />
      </head>
      <body>
        <Component />
        <script src="/sawcase.js"></script>
      </body>
    </html>
  );
});
