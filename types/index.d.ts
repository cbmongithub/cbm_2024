import type { VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  imageAlt?: string;
}

export type MetadataWithSlug = {
  metadata: Metadata;
  slug: string;
  content: string;
}

export type ButtonProps<T> = VariantProps<T>
  & ButtonHTMLAttributes<HTMLButtonElement>
  & {
    asChild?: boolean;
  }

export type RepoProps = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  pushed_at: string;
}[]

type IconProps = SVGProps<SVGSVGElement>