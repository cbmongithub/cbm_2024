"use client";

import { useEffect, useState } from "react";

import type { RepoProps } from "@/_types";

import { formatDate } from "@/_lib/helpers";

import Spotlight from "./spotlight";
import Card from "./ui/card";

export default function Repos() {
  const [repos, setRepos] = useState<RepoProps["items"]>();

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/search/repositories?q=user:cbmongithub&sort=updated&per_page=6",
        { next: { revalidate: 43200 } }, // 12 hours
      );
      const data = await response.json();
      setRepos(data.items);
    }
    fetchRepos();
  }, []);

  if (!repos) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {repos.map((repo) => (
        <Spotlight key={repo.id}>
          <Card
            center={true}
            key={repo.id}
            title={repo.full_name || ""}
            contentUrl={repo.html_url || ""}
            description={repo.description || ""}
            content="repo"
            date={formatDate(repo.pushed_at || "")}
          />
        </Spotlight>
      ))}
    </div>
  );
}