"use client";

import { AiFillMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

export const Share = ({
  className,
  title,
  url,
  description,
}: {
  className?: string;
  title: string;
  url: string;
  description: string;
}) => {
  return (
    <ul
      className={`flex flex-wrap justify-start items-center gap-3 [&>li]:list-none ${className ?? ""}`}
      role="list"
    >
      <li>
        <EmailShareButton
          url={url}
          subject={`Check out this blog post: ${title}`}
          aria-label="Share blog post by email button"
          className="group inline-flex size-9 items-center justify-center rounded-full border border-neutral-800/60 bg-neutral-900/60 text-neutral-200 transition hover:border-neutral-700 hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <AiFillMail className="size-4" />
        </EmailShareButton>
      </li>
      <li>
        <FacebookShareButton
          url={url}
          aria-label="Share blog post through facebook button"
          className="group inline-flex size-9 items-center justify-center rounded-full border border-neutral-800/60 bg-neutral-900/60 text-neutral-200 transition hover:border-neutral-700 hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <FaFacebook className="size-4" />
        </FacebookShareButton>
      </li>
      <li>
        <LinkedinShareButton
          url={url}
          title={title}
          summary={description}
          source={url}
          aria-label="Share blog post through linkedin button"
          className="group inline-flex size-9 items-center justify-center rounded-full border border-neutral-800/60 bg-neutral-900/60 text-neutral-200 transition hover:border-neutral-700 hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <FaLinkedin className="size-4" />
        </LinkedinShareButton>
      </li>
      <li>
        <RedditShareButton
          url={url}
          title={title}
          aria-label="Share blog post through reddit button"
          className="group inline-flex size-9 items-center justify-center rounded-full border border-neutral-800/60 bg-neutral-900/60 text-neutral-200 transition hover:border-neutral-700 hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <FaReddit className="size-4" />
        </RedditShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={url}
          title={`Check out this blog post by @cbmonx! ${title}`}
          hashtags={["webdevelopment", "blog", "fullstack"]}
          aria-label="Share blog post through twitter button"
          className="group inline-flex size-9 items-center justify-center rounded-full border border-neutral-800/60 bg-neutral-900/60 text-neutral-200 transition hover:border-neutral-700 hover:text-blue-400  focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <XIcon className="size-6" />
        </TwitterShareButton>
      </li>
    </ul>
  );
};
