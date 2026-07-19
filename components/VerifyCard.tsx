"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import AnimatedNumber from "./AnimatedNumber";

type RepoData = {
  stargazers_count?: number;
  language?: string | null;
  open_issues_count?: number;
  pushed_at?: string;
};

function timeAgo(dateStr?: string) {
  if (!dateStr) return "—";
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diffMs / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export default function VerifyCard({
  label,
  full,
  onData,
}: {
  label: string;
  full: string;
  onData: (label: string, data: RepoData | null) => void;
}) {
  const [status, setStatus] = useState<"checking" | "ok" | "err">("checking");
  const [data, setData] = useState<RepoData | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${full}`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        setData(json);
        setStatus("ok");
        onData(label, json);
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("err");
        onData(label, null);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [full]);

  return (
    <Reveal className="vcard">
      <div className="vcard-top">
        <div className="vcard-name">{label}</div>
        <div className={`vcard-status ${status === "ok" ? "ok" : status === "err" ? "err" : ""}`}>
          {status === "checking" ? "checking…" : status === "ok" ? "verified" : "rate-limited"}
        </div>
      </div>
      <div className="vcard-stats">
        <div className="vstat">
          <b>{status === "ok" ? <AnimatedNumber value={data?.stargazers_count ?? 0} /> : status === "err" ? "—" : <span className="skel" />}</b>
          <span>Stars</span>
        </div>
        <div className="vstat">
          <b>{status === "ok" ? data?.language || "—" : status === "err" ? "—" : <span className="skel" />}</b>
          <span>Language</span>
        </div>
        <div className="vstat">
          <b>{status === "ok" ? <AnimatedNumber value={data?.open_issues_count ?? 0} /> : status === "err" ? "—" : <span className="skel" />}</b>
          <span>Open issues</span>
        </div>
        <div className="vstat">
          <b>{status === "ok" ? timeAgo(data?.pushed_at) : status === "err" ? "—" : <span className="skel" />}</b>
          <span>Last push</span>
        </div>
      </div>
    </Reveal>
  );
}
