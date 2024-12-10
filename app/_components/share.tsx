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

export function Share({
  className,
  title,
  url,
  description,
}: { className?: string; title: string; url: string; description: string }) {
  return (
    <div className={className}>
      <EmailShareButton
        url={url}
        subject={`Check out this blog post: ${title}`}
        aria-label="Share blog post by email button"
      >
        <div className="mr-3 cursor-pointer rounded-full hover:bg-gray-600">
          <AiFillMail className="size-4 text-white" />
        </div>
      </EmailShareButton>
      <FacebookShareButton url={url} aria-label="Share blog post through facebook button">
        <div className="mr-3 cursor-pointer rounded-full hover:bg-gray-600">
          <FaFacebook className="size-4 text-white" />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={url}
        aria-label="Share blog post through linkedin button"
      >
        <div className="mr-3 cursor-pointer rounded-full hover:bg-gray-600">
          <FaLinkedin className="size-4 text-white" />
        </div>
      </LinkedinShareButton>
      <RedditShareButton url={url} title={title} aria-label="Share blog post through reddit button">
        <div className="mr-3 cursor-pointer rounded-full hover:bg-gray-600">
          <FaReddit className="size-4 text-white" />
        </div>
      </RedditShareButton>
      <TwitterShareButton
        url={url}
        title={`Check out this blog post by @cbmonx! ${title}`}
        hashtags={["webdevelopment", "blog", "fullstack"]}
        aria-label="Share blog post through twitter button"
      >
        <div className="mr-3 cursor-pointer rounded-full hover:bg-gray-600">
          <XIcon className="size-5 text-white" />
        </div>
      </TwitterShareButton>
    </div>
  );
}