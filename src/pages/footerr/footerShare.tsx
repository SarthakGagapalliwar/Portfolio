"use client";

import React, { JSX } from "react";
import { Facebook, Link, Link2, Linkedin, Twitter } from "lucide-react";

import ShareButton from "@/components/ui/share-button";

// Example usage
export function ShareButtonDemo(): JSX.Element {
  const shareLinks = [
    {
      icon: Twitter,
      onClick: () =>
        window.open(
          "https://twitter.com/share?text=Check out this amazing portfolio!",
          "_blank"
        ),
      label: "Share on Twitter",
    },
    {
      icon: Facebook,
      onClick: () =>
        window.open(
          "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(window.location.href),
          "_blank"
        ),
      label: "Share on Facebook",
    },
    {
      icon: Linkedin,
      onClick: () =>
        window.open(
          "https://www.linkedin.com/sharing/share-offsite/?url=" +
            encodeURIComponent(window.location.href),
          "_blank"
        ),
      label: "Share on LinkedIn",
    },
    {
      icon: Link,
      onClick: () => {
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => {
            // Optional: Add a toast notification here
            console.log("Link copied to clipboard!");
          })
          .catch((err) => {
            console.error("Failed to copy link: ", err);
          });
      },
      label: "Copy link",
    },
  ];

  return (
    <div className="flex items-center">
      <ShareButton
        links={shareLinks}
        className="text-sm font-medium bg-white hover:bg-gray-50 text-neutral border border-neutral/10"
      >
        <Link size={16} />
        Connect
      </ShareButton>
    </div>
  );
}
