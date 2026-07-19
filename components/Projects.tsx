import type { ReactNode } from "react";
import SectionHead from "./SectionHead";
import ProjectCard from "./ProjectCard";
import WebhookViz from "./viz/WebhookViz";
import ScribbleViz from "./viz/ScribbleViz";
import QualityVedaViz from "./viz/QualityVedaViz";
import TbiViz from "./viz/TbiViz";
import { projects } from "@/lib/data";

const vizMap: Record<string, ReactNode> = {
  "webhook-relay": <WebhookViz />,
  scribble: <ScribbleViz />,
  qualityveda: <QualityVedaViz />,
  tbi: <TbiViz />,
};

export default function Projects() {
  return (
    <section id="projects">
      <SectionHead
        index="02"
        label="Projects"
        title="Things I've built and broken on purpose"
        sub="github.com/Prasannam23"
      />
      <div className="proj-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} viz={vizMap[project.id]} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
