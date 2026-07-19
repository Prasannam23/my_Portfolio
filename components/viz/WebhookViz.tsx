export default function WebhookViz() {
  return (
    <svg viewBox="0 0 260 60">
      <path className="mv-line" d="M15,20 L95,20" />
      <path className="mv-line" d="M115,20 L195,20" />
      <path className="mv-line-dash" d="M105,28 L105,50 L60,50" />
      <rect className="mv-box" x="10" y="8" width="60" height="24" rx="3" />
      <text className="mv-label" x="40" y="24">INGEST</text>
      <rect className="mv-box-amber" x="80" y="8" width="60" height="24" rx="3" />
      <text className="mv-label" x="110" y="24">QUEUE</text>
      <rect className="mv-box-cyan" x="150" y="8" width="60" height="24" rx="3" />
      <text className="mv-label" x="180" y="24">DELIVERED</text>
      <rect className="mv-box" x="30" y="42" width="60" height="16" rx="3" style={{ animation: "mvLoopPulse 3.4s ease-in-out infinite" }} />
      <text className="mv-label" x="60" y="53" style={{ fontSize: "6.5px" }}>DEAD-LETTER</text>
      <path d="M40,8 Q40,-4 60,8" className="mv-line-dash" style={{ animation: "mvLoopPulse 2.6s ease-in-out infinite" }} />
      <circle className="mv-dot" r="2.6">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M15,20 L195,20" />
      </circle>
    </svg>
  );
}
