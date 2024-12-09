import { Code } from "bright";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ComponentProps, ElementType } from "react";

import myTheme from "@/_lib/theme.json";

Code.theme = myTheme;

const components = {
  pre: Code,
};

export function Mdx(
  props: MDXRemoteProps & {
    components?: ComponentProps<ElementType>;
  },
) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
