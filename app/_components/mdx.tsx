import { Code } from "bright";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link, { type LinkProps } from "next/link";
import { type ComponentProps, type ElementType, createElement } from "react";

import { slugify } from "@/_lib/helpers";
import theme from "@/_lib/theme.json";

Code.theme = theme;

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  a: (props: LinkProps) => <Link {...props} />,
  pre: Code,
};

export function Mdx(
  props: MDXRemoteProps & {
    components?: ComponentProps<ElementType>;
  },
) {
  return <MDXRemote {...props} components={{ ...components }} />;
}
