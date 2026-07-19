export default function ProxyViz() {
  return (
    <svg viewBox="0 0 260 60">
      <g style={{ animation: "mvSlotShift 2.4s ease-in-out infinite alternate" }}>
        <rect className="mv-box-cyan" x="15" y="16" width="34" height="24" rx="2" />
        <rect className="mv-box" x="53" y="16" width="34" height="24" rx="2" />
        <rect className="mv-box" x="91" y="16" width="34" height="24" rx="2" />
        <rect className="mv-box" x="129" y="16" width="34" height="24" rx="2" />
        <rect className="mv-box" x="167" y="16" width="34" height="24" rx="2" style={{ animation: "mvFadeCycle 2.4s ease-in-out infinite" }} />
      </g>
      <text className="mv-label" x="130" y="52" style={{ fontSize: "6.5px" }}>LRU CACHE — OLDEST EVICTED</text>
      <circle className="mv-dot-cyan" cx="222" cy="16" r="3" style={{ animation: "mvLoopPulse 1.2s ease-in-out infinite" }} />
      <circle className="mv-dot-cyan" cx="234" cy="16" r="3" style={{ animation: "mvLoopPulse 1.2s ease-in-out infinite .4s" }} />
      <circle className="mv-dot-cyan" cx="246" cy="16" r="3" style={{ animation: "mvLoopPulse 1.2s ease-in-out infinite .8s" }} />
      <text className="mv-label" x="234" y="34" style={{ fontSize: "6px" }}>THREADS</text>
    </svg>
  );
}
