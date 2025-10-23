"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";

interface ContributionsProps {
  prs: string[]; // list of GitHub PR URLs
}

interface PRData {
  url: string;
  title: string;
  number: number;
  repo: string;
}

export default function Contributions({ prs }: ContributionsProps) {
  const [prData, setPrData] = useState<PRData[]>([]);
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

  useEffect(() => {
    async function fetchPRDetails() {
      const data = await Promise.all(
        prs.map(async (url) => {
          try {
            // Example URL: https://github.com/fossasia/eventyay-tickets-exhibitors/pull/1
            const match = url.match(
              /github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/
            );
            if (!match) return null;

            const [, owner, repo, number] = match;
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${number}`;
  			const res = await fetch(apiUrl, {
  			  headers: {
  			    Authorization: `token ${token}`,
  			  },
			});
            if (!res.ok) throw new Error("GitHub fetch failed");
            const json = await res.json();

            return {
              url,
              title: json.title,
              number: json.number,
              repo: `${owner}/${repo}`,
            };
          } catch {
            return null;
          }
        })
      );

      setPrData(data.filter((d): d is PRData => d !== null));
    }

    fetchPRDetails();
  }, [prs]);

  if (!prData.length)
    return (
      <p className="text-sm text-gray-500 animate-pulse">
        Loading contributions...
      </p>
    );

  return (
    <ul className="space-y-2 mt-3 text-xl font-helvetica mt-4 text-justify">
      {prData.map((pr) => (
        <li
          key={pr.url}
          className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100 transition"
        >
          <GitBranch className="text-blue-500 w-4 h-4" />
          <a
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline"
          >
            {pr.repo} — {pr.title} #{pr.number}
          </a>
        </li>
      ))}
    </ul>
  );
}
