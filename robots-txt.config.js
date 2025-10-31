module.exports = {
  host: "https://i.gromov.digital",
  sitemap: "https://i.gromov.digital/sitemap-index.xml",
  policy: [
    {
      userAgent: "Googlebot",
      disallow: ["/cgi-bin/", "*/trackback/", "/xmlrpc.php"],
    },
    {
      userAgent: "*",
      disallow: ["/cgi-bin/", "*/trackback/", "/xmlrpc.php"],
    },
    {
      userAgent: "Yandex",
      disallow: ["/cgi-bin/", "*/trackback/", "/xmlrpc.php"],
    },
  ],
};
