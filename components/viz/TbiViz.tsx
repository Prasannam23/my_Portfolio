export default function TbiViz() {
  return (
    <svg viewBox="0 0 260 60">
      <rect className="mv-box" x="10" y="24" width="70" height="14" rx="3" />
      <rect className="mv-box-amber" x="10" y="24" width="70" height="14" rx="3" style={{ animation: "mvSegFill 2.7s ease-in-out infinite" }} />
      <text className="mv-label" x="45" y="46" style={{ fontSize: "6.5px" }}>ONBOARD</text>
      <rect className="mv-box" x="95" y="24" width="70" height="14" rx="3" />
      <rect className="mv-box-amber" x="95" y="24" width="70" height="14" rx="3" style={{ animation: "mvSegFill 2.7s ease-in-out infinite .9s" }} />
      <text className="mv-label" x="130" y="46" style={{ fontSize: "6.5px" }}>FUND</text>
      <rect className="mv-box" x="180" y="24" width="70" height="14" rx="3" />
      <rect className="mv-box-cyan" x="180" y="24" width="70" height="14" rx="3" style={{ animation: "mvSegFill 2.7s ease-in-out infinite 1.8s" }} />
      <text className="mv-label" x="215" y="46" style={{ fontSize: "6.5px" }}>MENTOR</text>
    </svg>
  );
}
