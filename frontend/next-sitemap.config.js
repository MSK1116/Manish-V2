const fs = require("fs");
const path = require("path");

// Recursively find static routes in /src/app (adjust if needed)
function findStaticRoutes(baseDir, parent = "") {
  const entries = fs.readdirSync(path.join(baseDir, parent));
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(baseDir, parent, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (entry === "api" || entry.startsWith("[") || entry.startsWith("_")) continue;
      routes = routes.concat(findStaticRoutes(baseDir, path.join(parent, entry)));
    } else if (entry === "page.tsx" || entry === "page.jsx" || entry === "page.js") {
      const route = parent === "" ? "/" : `/${parent}`;
      routes.push(route.replace(/\\/g, "/"));
    }
  }

  return routes;
}

// Adjust this path if your app/ folder is elsewhere
const appDir = path.join(__dirname, "src", "app"); // or just "app" if not in src/
const staticRoutes = findStaticRoutes(appDir);

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.manishmahato.info.np",
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  additionalPaths: async () => {
    return staticRoutes.map((route) => ({
      loc: route,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
