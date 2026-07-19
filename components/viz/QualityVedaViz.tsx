export default function QualityVedaViz() {
  return (
    <svg viewBox="0 0 260 60">
      <path className="mv-line" d="M15,30 L95,30" />
      <path className="mv-line" d="M115,30 L195,30" />
      <rect className="mv-box" x="10" y="18" width="60" height="24" rx="3" />
      <text className="mv-label" x="40" y="34">AUTH</text>
      <rect className="mv-box" x="80" y="18" width="60" height="24" rx="3" />
      <text className="mv-label" x="110" y="34">COURSES</text>
      <rect className="mv-box-cyan" x="150" y="18" width="60" height="24" rx="3" />
      <text className="mv-label" x="180" y="34" style={{ fontSize: "6.5px" }}>CERTIFICATE</text>
      <path
        d="M172,14 l4,4 l7,-9"
        className="mv-line"
        style={{ stroke: "var(--cyan)", transformOrigin: "180px 18px", animation: "mvStampPulse 1.8s ease-in-out infinite" }}
      />
      <circle className="mv-dot" r="2.6">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M15,30 L195,30" />
      </circle>
    </svg>
  );
}
