import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { PROJECTS } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I'm proud of"
          highlight="proud"
          description="A selection of projects that reflect how I approach product, architecture, and interface design."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
