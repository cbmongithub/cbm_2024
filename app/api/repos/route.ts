export default async function getLatestRepos(req, res) {
  try {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=user:christianbmartinez&sort=updated&per_page=6",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
        },
        cache: "force-cache",
        next: { revalidate: 21600 }, // Revalidate every 6 hours
      },
    );
    const repos = await response.json();
    res.status(200).json({
      json: repos,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: "An error occurred while trying to fetch repositories.",
      e,
    });
  }
}

