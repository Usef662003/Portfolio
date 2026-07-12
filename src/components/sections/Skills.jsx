import { useState } from 'react';
import { Code, Wrench } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import SkillBar from '../ui/SkillBar';
import { FRONTEND_SKILLS, TOOLS_SKILLS } from '../../data/skills';

const TABS = [
  { id: 'frontend', label: 'Frontend', icon: Code, data: FRONTEND_SKILLS },
  { id: 'tools', label: 'Tools', icon: Wrench, data: TOOLS_SKILLS },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const currentTab = TABS.find((t) => t.id === activeTab);

  return (
    <section id="skills" className="section-padding relative bg-surface/20">
      <div className="section">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          highlight="build"
          description="A snapshot of the languages, frameworks, and tools I use to ship production interfaces."
        />

        {/* Tab switcher */}
        <div className="mb-10 flex justify-center">
          <div className="glass inline-flex gap-1 rounded-full p-1.5">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentTab.data.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
