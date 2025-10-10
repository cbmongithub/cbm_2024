export const baseUrl =
  process.env["NEXT_PUBLIC_BASE_URL"] ?? "https://christianbmartinez.com";

export const links = {
  nav: [
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
  ogImage: "https://www.christianbmartinez.com/og-image.png",
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
