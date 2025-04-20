
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface MotionCardProps extends ComponentProps<typeof Card> {
  delay?: number;
  duration?: number;
}

export function MotionCard({
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration,
        delay, 
        ease: "easeOut" 
      }}
    >
      <Card className={cn(className)} {...props} />
    </motion.div>
  );
}
