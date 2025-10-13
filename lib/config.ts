export const baseUrl =
  process.env["NEXT_PUBLIC_BASE_URL"] ?? "https://www.christianbmartinez.com";

export const links = {
  nav: [
    {
      href: "/",
      text: "home",
    },
    {
      href: "/about",
      text: "about",
    },
    {
      href: "/portfolio",
      text: "portfolio",
    },
    {
      href: "/blog",
      text: "blog",
    },
    {
      href: "/resume",
      text: "resume",
    },
  ],
  footer: [
    {
      href: "/",
      text: "home",
    },
    {
      href: "/blog",
      text: "blog",
    },
    {
      href: "/rss",
      text: "rss",
    },
    {
      href: "/sitemap.xml",
      text: "sitemap",
    },
  ],
  socials: {
    github: "https://www.github.com/cbmongithub",
    linkedin: "https://www.linkedin.com/in/cbmonlinkedn/",
    twitter: "https://www.twitter.com/cbmonx",
  },
};

export const site = {
  name: "Christian B. Martinez",
  url: baseUrl,
  ogImage: `${baseUrl}/opengraph-image.png`,
  description: "I build apps and tools for the web.",
  links: {
    twitter: links.socials.twitter,
    github: links.socials.github,
  },
  handles: {
    twitter: "@cbmonx",
    github: "@cbmongithub",
  },
};
