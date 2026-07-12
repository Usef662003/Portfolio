import { motion } from 'framer-motion';

/**
 * Displays a single skill: icon, name, animated progress bar, and
 * percentage. The bar fills when it scrolls into view.
 */
export default function SkillBar({ skill, index = 0 }) {
  const { name, icon: Icon, level, color } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="card group p-5 hover:border-primary/40"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-transform duration-300 group-hover:scale-110"
            style={{ color }}
          >
            <Icon size={20} />
          </span>
          <span className="font-medium text-text">{name}</span>
        </div>
        <span className="font-display text-sm font-semibold text-text-muted">
          {level}%
        </span>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.15, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-primary"
        />
      </div>
    </motion.div>
  );
}
