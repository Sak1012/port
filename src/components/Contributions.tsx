"use client";

import { useEffect, useState } from "react";
import { GitBranch, X } from "lucide-react";

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
  const [showAll, setShowAll] = useState(false);
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";

  useEffect(() => {
    async function fetchPRDetails() {
      const data = await Promise.all(
        prs.map(async (url) => {
          try {
            const match = url.match(
              /github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/
            );
            if (!match) return null;

            const [, owner, repo, number] = match;
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/pulls/${number}`;
            const res = await fetch(apiUrl, {
              headers: { Authorization: `token ${token}` },
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
  }, [prs, token]);

  if (!prData.length)
    return (
      <p className="text-sm text-gray-500 animate-pulse">
        Loading contributions...
      </p>
    );

  const displayedPRs =
    prData.length > 5 ? prData.slice(0, 5) : prData;

  return (
    <div className="relative">
      <ul className="space-y-2 mt-3 text-xl font-helvetica mt-4 text-justify">
        {displayedPRs.map((pr) => (
          <li
            key={pr.url}
            className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100 transition"
          >
            <GitBranch className="text-blue-500 w-4 h-4" />
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {pr.repo} — {pr.title} #{pr.number}
            </a>
          </li>
        ))}
      </ul>

      {prData.length > 5 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
        >
          Show More
        </button>
      )}

      {showAll && (
        <div className="fixed inset-0 z-50 flex items-center rounded-lg justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] flex flex-col">
            {/* Fixed Header with Close Button */}
  			<button
  			  onClick={() => setShowAll(false)}
  			  className="absolute top-3 right-3 z-20 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full p-1 transition"
  			  aria-label="Close"
  			>
  			  <X className="w-5 h-5" />
  			</button>

            {/* Scrollable PR List with custom scrollbar */}
			<div className="p-4 overflow-y-auto custom-scrollbar rounded-b-lg">
			  <ul className="space-y-2">
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
			          className="hover:underline"
			        >
			          {pr.repo} — {pr.title} #{pr.number} by
			        </a>
			      </li>
			    ))}
			  </ul>
			
			  <style jsx>{`
			    /* Hide scrollbar track background */
			    .custom-scrollbar::-webkit-scrollbar {
			      width: 6px;
			    }
			    .custom-scrollbar::-webkit-scrollbar-track {
			      background: transparent;
			    }
			    .custom-scrollbar::-webkit-scrollbar-thumb {
			      background-color: #9ca3af; /* gray-400 */
			      border-radius: 3px;
			    }
			    .custom-scrollbar:hover::-webkit-scrollbar-thumb {
			      background-color: #6b7280; /* gray-500 */
			    }
			    /* Firefox support */
			    .custom-scrollbar {
			      scrollbar-width: thin;
			      scrollbar-color: #9ca3af transparent;
			    }
			  `}</style>
			</div>
          </div>
        </div>
      )}
    </div>
  );
}
