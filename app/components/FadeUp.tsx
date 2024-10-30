import { motion } from "framer-motion"
import React, { type ReactElement } from "react"

interface FadeUpProps {
  delay?: number
  duration?: number
  children: ReactElement
}

const FadeUp: React.FC = ({
  children,
  delay = 0.1,
  duration = 0.6,
}: FadeUpProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  )
}

export default FadeUp
