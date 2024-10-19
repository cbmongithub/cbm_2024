import { useState } from "preact/hooks";

const cache = new Map();

const load = async (url: string) => {
	const res = await fetch(url);
	if (res.ok) {
		return await res.text();
	}
	throw new Error(`Failed to fetch ${url}!`);
};

const useFetch = (url: string) => {
	const [_, update] = useState({});

	let data = cache.get(url);

	if (!data) {
		data = load(url);
		cache.set(url, data);
		data.then(
			(res: string) => {
				data.res = res;
				update({});
			},
			(err: Error) => {
				data.err = err;
				update({});
			}
		);
	}

	if (data.res) {
		return data.res;
	}
	if (data.err) {
		throw data.err;
	}

	throw data;
};

export function LocalFetch() {
	const data = useFetch("/local-fetch-test.txt");

	return <p>{(!data && "Loading...") ?? data.trimEnd()}</p>;
}
