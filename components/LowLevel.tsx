import type { ReactNode } from "react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import ProxyViz from "./viz/ProxyViz";
import TokenizerViz from "./viz/TokenizerViz";
import { lowLevelProjects } from "@/lib/data";

const vizMap: Record<string, ReactNode> = {
  "http-proxy": <ProxyViz />,
  tokkenizer: <TokenizerViz />,
};

export default function LowLevel() {
  return (
    <section id="lowlevel">
      <SectionHead index="03" label="Low-Level Systems" title="Where I go when I want no framework in the way" sub="C / C++" />
      <Reveal as="div">
        <p className="lowlevel-intro">
          The web stack is where I ship product. These are the projects where I went a layer
          deeper — raw sockets, manual memory and thread management, and data structures built
          by hand instead of imported.
        </p>
      </Reveal>
      <div className="lowlevel-grid">
        {lowLevelProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            viz={vizMap[project.id]}
            variant="lowlevel"
            delay={i * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
