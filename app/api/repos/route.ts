import type { NextApiRequest, NextApiResponse } from "next";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
}

interface ReposResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}

export default async function repos(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=user:cbmongithub&sort=updated&per_page=6",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
        },
        cache: "force-cache",
        next: { revalidate: 21600 }, // Revalidate every 6 hours
      },
    );
    const repos: ReposResponse = await response.json();
    res.status(200).json({
      json: repos,
    });
  } catch (e) {
    res.status(500).json({
      error: "An error occurred while trying to fetch repositories.",
      e,
    });
  }
}
