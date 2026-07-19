import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";
import { jobs } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead index="01" label="Experience" title="Where I've built this stuff for real" />

      {jobs.map((job, i) => (
        <Reveal key={job.org} className="job" delay={i * 0.05}>
          <div className="job-meta">
            <span className="rev">{job.tag}</span>
            <span className="range">{job.range}</span>
            {job.location}
          </div>
          <div>
            <div className="job-role">
              {job.role}
              {job.roleSuffix && <span className="suffix"> {job.roleSuffix}</span>}
            </div>
            <div className="job-org">{job.org}</div>
            <StaggerGroup as="ul">
              {job.bullets.map((bullet) => (
                <StaggerItem as="li" key={bullet}>
                  {bullet}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
