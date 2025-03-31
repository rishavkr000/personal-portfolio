
import { Progress } from '@/components/ui/progress';

interface SkillBarProps {
  name: string;
  percentage: number;
  animationDelay?: string;
}

const SkillBar = ({ name, percentage, animationDelay = "0ms" }: SkillBarProps) => {
  return (
    <div className="space-y-2 animate-fade-in" style={{ animationDelay }}>
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default SkillBar;
