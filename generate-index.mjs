import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist/client";
const assetsDir = join(distDir, "assets");

if (!existsSync(assetsDir)) {
  throw new Error(`Assets directory not found: ${assetsDir}`);
}

const jsFiles = readdirSync(assetsDir).filter((file) => /^index-.*\.js$/.test(file));
const cssFiles = readdirSync(assetsDir).filter((file) => /^styles-.*\.css$/.test(file));

if (jsFiles.length === 0) {
  throw new Error(`No JS bundle found in ${assetsDir}`);
}

if (cssFiles.length === 0) {
  throw new Error(`No CSS bundle found in ${assetsDir}`);
}

const mainJs = jsFiles[0];
const mainCss = cssFiles[0];

const html = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Haikal Albanna — Full-Stack Developer &amp; Data Analyst</title>
    <meta name="description" content="Portofolio personal Haikal Tirta Albanna, seorang full-stack developer dan data analyst." />
    <link rel="icon" href="/icon-icons.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" />
    <link rel="stylesheet" href="/assets/${mainCss}" />
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.$_TSR = window.$_TSR || {};
      window.$_TSR.buffer = window.$_TSR.buffer || [];
      window.$_TSR.t = window.$_TSR.t || new Map();
      window.$_TSR.initialized = true;
      window.$_TSR.h = window.$_TSR.h || function() {};
      window.$_TSR.router = window.$_TSR.router || {
        matches: [],
        lastMatchId: null,
        dehydratedData: {},
        manifest: {
          routes: {
            "__root__": { filePath: "src/routes/__root.tsx", children: ["/"] },
            "/": { filePath: "src/routes/index.tsx" }
          }
        }
      };
    </script>
    <script type="module" src="/assets/${mainJs}"></script>
  </body>
</html>`;

writeFileSync(join(distDir, "index.html"), html, "utf8");
console.log(`Generated ${join(distDir, "index.html")} using ${mainJs} and ${mainCss}`);
