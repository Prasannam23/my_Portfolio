export default function TokenizerViz() {
  return (
    <svg viewBox="0 0 260 60">
      <text className="mv-label" x="130" y="16" style={{ fontSize: "9px", letterSpacing: "2px" }}>HELLOWORLD</text>
      <g>
        <rect className="mv-box-amber" x="20" y="24" width="46" height="18" rx="2" style={{ animation: "mvFadeCycle 3s ease-in-out infinite" }} />
        <rect className="mv-box-amber" x="72" y="24" width="46" height="18" rx="2" style={{ animation: "mvFadeCycle 3s ease-in-out infinite .3s" }} />
        <rect className="mv-box-amber" x="124" y="24" width="46" height="18" rx="2" style={{ animation: "mvFadeCycle 3s ease-in-out infinite .6s" }} />
        <rect className="mv-box-amber" x="176" y="24" width="46" height="18" rx="2" style={{ animation: "mvFadeCycle 3s ease-in-out infinite .9s" }} />
      </g>
      <text className="mv-label" x="43" y="37" style={{ fontSize: "6px" }}>HEL</text>
      <text className="mv-label" x="95" y="37" style={{ fontSize: "6px" }}>LO</text>
      <text className="mv-label" x="147" y="37" style={{ fontSize: "6px" }}>WOR</text>
      <text className="mv-label" x="199" y="37" style={{ fontSize: "6px" }}>LD</text>
      <text className="mv-label" x="130" y="54" style={{ fontSize: "6.5px" }}>BYTE-LEVEL TOKEN SPLIT</text>
    </svg>
  );
}
