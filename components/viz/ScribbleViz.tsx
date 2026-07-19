export default function ScribbleViz() {
  return (
    <svg viewBox="0 0 260 60">
      <rect className="mv-box" x="10" y="6" width="100" height="34" rx="3" />
      <rect className="mv-box" x="150" y="6" width="100" height="34" rx="3" />
      <text className="mv-label" x="60" y="46">PLAYER L</text>
      <text className="mv-label" x="200" y="46">PLAYER R</text>
      <path className="mv-line" d="M20,30 L35,14 L50,26 L65,12" style={{ strokeDasharray: 60, animation: "mvStrokeIn 2.8s ease-in-out infinite" }} />
      <path className="mv-line" d="M160,14 L175,28 L190,16 L205,24" style={{ strokeDasharray: 60, animation: "mvStrokeIn 2.8s ease-in-out infinite .5s" }} />
      <rect x="122" y="10" width="4" height="10" className="mv-box-amber" style={{ transformOrigin: "124px 20px", animation: "mvBarGrow 1.6s ease-in-out infinite" }} />
      <rect x="130" y="4" width="4" height="16" className="mv-box-cyan" style={{ transformOrigin: "132px 20px", animation: "mvBarGrow 1.6s ease-in-out infinite .3s" }} />
      <text className="mv-label" x="128" y="52" style={{ fontSize: "6.5px" }}>LIVE VOTES</text>
    </svg>
  );
}
