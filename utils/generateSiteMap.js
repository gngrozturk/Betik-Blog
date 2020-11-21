const fs = require("fs");
const globby = require("globby");

async function generateSiteMap() {
  const pages = await globby([
    "out/**/*.html",
    "!out/_next/",
    "!out/sitemap.xml",
    "!out/*.png",
    "!out/**/[id].js",
  ]);

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map((page) => {
              const path = page
                .replace("pages", "")
                .replace(".js", "")
                .replace(".md", "")
                .replace("out/", "")
                .replace(".html", "")

              const route = path === "/index" ? "" : path;
              return `
                      <url>
                          <loc>${`https://www.betikblog.com/${route}`}</loc>
                      </url>
                  `;
            })
            .join("")}
      </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();
