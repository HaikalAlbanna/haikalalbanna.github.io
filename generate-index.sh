#!/usr/bin/env bash
# generate-index.sh
# Generates a static index.html for GitHub Pages after TanStack Start build
set -e

DIST="dist/client"
ASSETS="$DIST/assets"

MAIN_JS=$(ls "$ASSETS"/index-*.js 2>/dev/null | head -n1 | xargs basename)
MAIN_CSS=$(ls "$ASSETS"/styles-*.css 2>/dev/null | head -n1 | xargs basename)

if [ -z "$MAIN_JS" ]; then echo "ERROR: No index-*.js in $ASSETS"; exit 1; fi
if [ -z "$MAIN_CSS" ]; then echo "ERROR: No styles-*.css in $ASSETS"; exit 1; fi

echo "JS:  $MAIN_JS"
echo "CSS: $MAIN_CSS"

cat > "$DIST/index.html" <<ENDOFHTML
<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Haikal Albanna — Full-Stack Developer &amp; Data Analyst</title>
    <meta name="description" content="Portofolio personal Haikal Tirta Albanna, seorang full-stack developer dan data analyst." />
    <link rel="icon" href="icon-icons.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" />
    <link rel="stylesheet" href="assets/$MAIN_CSS" />
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.\$_TSR = window.\$_TSR || {};
      window.\$_TSR.buffer = window.\$_TSR.buffer || [];
      window.\$_TSR.t = window.\$_TSR.t || new Map();
      window.\$_TSR.initialized = true;
      window.\$_TSR.h = window.\$_TSR.h || function() {};
      window.\$_TSR.router = window.\$_TSR.router || {
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
    <script type="module" src="assets/$MAIN_JS"></script>
  </body>
</html>
ENDOFHTML

echo "Generated $DIST/index.html"
