"use client";

import { useEffect, useState } from "react";

import { fd } from "lib/helpers";

import { Spotlight } from "components/spotlight";
import { Card } from "ui/card";
import type { RepoProps } from "types";

export const Repos = () => {
    const [repos, setRepos] = useState<RepoProps>();

    useEffect(() => {
        const fetchRepos = async() => {
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
        <div className='min-h-screen w-full'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {repos.map((repo) => (
                <Spotlight key={repo.id} className="h-28 w-1/2">
                    <Card
                        center={true}
                        key={repo.id}
                        title={repo.full_name || ""}
                        contentUrl={repo.html_url || ""}
                        description={repo.description || ""}
                        content="repo"
                        date={fd(repo.pushed_at || "")}
                    />
                </Spotlight>
            ))}
            </div>
        </div>
    );
}