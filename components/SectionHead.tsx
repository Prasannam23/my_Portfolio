import Reveal from "./Reveal";

export default function SectionHead({
  index,
  label,
  title,
  sub,
}: {
  index: string;
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="sec-head">
      <span className="plate-label">
        {index} / {label}
      </span>
      <h2 className="sec-title">{title}</h2>
      {sub && <span className="sec-sub">{sub}</span>}
    </Reveal>
  );
}
