import { motion } from 'framer-motion'

const AnimatedTitle = ({ text }: { text: string }) => {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            fontSize: "4.5rem",
            fontWeight: 800,
            background: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTitle
