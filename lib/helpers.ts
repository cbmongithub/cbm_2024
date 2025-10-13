import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...cn: ClassValue[]) => twMerge(clsx(...cn));

export const formatDate = (date: string, includeRelative = false) => {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const year = currentDate.getFullYear() - targetDate.getFullYear();
  const month = currentDate.getMonth() - targetDate.getMonth();
  const day = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (year === 0 && month === 0 && day === 1) {
    formattedDate = "Yesterday";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
};

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/--+/g, "-");
