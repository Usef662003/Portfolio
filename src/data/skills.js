import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiReactrouter,
  SiAxios,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Each skill: name, icon component, proficiency (0-100), and a brand color
// used for the icon glow + progress bar tint.
export const FRONTEND_SKILLS = [
  { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, level: 92, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, level: 78, color: '#3178C6' },
  { name: 'React', icon: SiReact, level: 92, color: '#61DAFB' },
  { name: 'Redux Toolkit', icon: SiRedux, level: 80, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 93, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, level: 82, color: '#7952B3' },
  { name: 'React Router', icon: SiReactrouter, level: 88, color: '#CA4245' },
  { name: 'Axios', icon: SiAxios, level: 85, color: '#5A29E4' },
];

export const TOOLS_SKILLS = [
  { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, level: 92, color: '#F8FAFC' },
  { name: 'VS Code', icon: VscVscode, level: 95, color: '#007ACC' },
  { name: 'Vite', icon: SiVite, level: 88, color: '#646CFF' },
  { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, level: 84, color: '#FF6C37' },
];
