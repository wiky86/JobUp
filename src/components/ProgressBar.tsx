import { cn } from '../utils/cn';

interface ProgressBarProps {
  progress: number;
  className?: string;
  colorClass?: string;
}

export function ProgressBar({ progress, className, colorClass = "bg-primary" }: ProgressBarProps) {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div 
        className={cn("h-2.5 rounded-full transition-all duration-500", colorClass)} 
        style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
      ></div>
    </div>
  );
}
