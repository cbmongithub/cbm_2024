import { formatDate } from "lib/helpers";

import { Spotlight } from "components/spotlight";
import type { RepoProps } from "types";
import { Card } from "ui/card";

const githubSearchUrl = "https://api.github.com/search/repositories?q=user:cbmongithub&sort=updated&per_page=6";

export const Repos = async () => {
  const response = await fetch(githubSearchUrl, { next: { revalidate: 43200 } }); // 12 hours

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { items?: RepoProps };
  const repos = (data.items ?? []) as RepoProps;

  if (repos.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
    </div>
  );
};
