import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ text }) => (
  <motion.p
    variants={textContainer}
    className={`text-xl mt-20`}
  >
    {Array.from(text).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TypingTextBis = ({ text }) => (
  <motion.p
    variants={textContainer}
    className={`text-xl`}
  >
    {Array.from(text).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);