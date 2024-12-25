import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...cn: ClassValue[]) => twMerge(clsx(...cn))

export const cx = (...cn: (string | boolean | undefined)[]) => cn.filter(Boolean).join(" ")

export const fd = (date: string, includeRelative = false) => {
	const cd = new Date();
	const td = new Date(date);
	const y = cd.getFullYear() - td.getFullYear();
	const m = cd.getMonth() - td.getMonth();
	const d = cd.getDate() - td.getDate();

	let formattedDate = "";

	if (y === 0 && m === 0 && d === 1) {
		formattedDate = "Yesterday";
	}

	const fullDate = td.toLocaleString("en-us", {
		month: "numeric",
		day: "numeric",
		year: "numeric",
	});

	if (!includeRelative) {
		return fullDate;
	}

	return `${fullDate} (${formattedDate})`;
}

export const slugify = (str: string) => str
	.toLowerCase()
	.trim()
	.replace(/\s+/g, "-")
	.replace(/&/g, "-and-")
	.replace(/[^\w\-]+/g, "")
	.replace(/--+/g, "-")
