
import { motion } from "framer-motion";
import { ComponentProps, forwardRef } from "react";

// Fade Up animation
export const FadeUp = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
FadeUp.displayName = "FadeUp";

// Fade animation
export const Fade = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
Fade.displayName = "Fade";

// Scale animation
export const Scale = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
Scale.displayName = "Scale";

// Staggered items animation
export const StaggerContainer = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
StaggerContainer.displayName = "StaggerContainer";

// Stagger item animation
export const StaggerItem = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
StaggerItem.displayName = "StaggerItem";

// Slide from left animation
export const SlideFromLeft = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
SlideFromLeft.displayName = "SlideFromLeft";

// Slide from right animation
export const SlideFromRight = forwardRef<HTMLDivElement, ComponentProps<typeof motion.div>>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
SlideFromRight.displayName = "SlideFromRight";
