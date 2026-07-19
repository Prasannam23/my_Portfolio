import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education">
      <SectionHead index="05" label="Education" title="Foundation" />
      <div className="edu-grid">
        {education.map((edu, i) => (
          <Reveal className="edu-plate" key={edu.degree} delay={i * 0.08}>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
            <div className="edu-meta">
              <span>{edu.range}</span>
              <b>{edu.metric}</b>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
