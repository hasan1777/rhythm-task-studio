
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Pause, Play, SkipForward } from "lucide-react";

// Placeholder task data
const tasks = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Finalize the project proposal document and send it to the client for review.",
    dueDate: "2025-04-21",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Review analytics dashboard",
    description: "Analyze user engagement metrics and prepare report for monthly meeting.",
    dueDate: "2025-04-22",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Team meeting preparation",
    description: "Prepare agenda and materials for the upcoming team status meeting.",
    dueDate: "2025-04-23",
    priority: "low",
    completed: false,
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-priority-high";
    case "medium":
      return "bg-priority-medium";
    case "low":
      return "bg-priority-low";
    default:
      return "bg-gray-500";
  }
};

const Focus = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string>(tasks[0].id.toString());
  const [timerActive, setTimerActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
  const [timerMode, setTimerMode] = useState<"focus" | "break">("focus");

  const selectedTask = tasks.find((task) => task.id.toString() === selectedTaskId);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      // Timer completed
      setTimerActive(false);
      if (timerMode === "focus") {
        setTimerMode("break");
        setTimeRemaining(5 * 60); // 5 minute break
      } else {
        setTimerMode("focus");
        setTimeRemaining(25 * 60); // Back to 25 minutes focus
      }
    }

    return () => clearInterval(interval);
  }, [timerActive, timeRemaining, timerMode]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimeRemaining(timerMode === "focus" ? 25 * 60 : 5 * 60);
  };

  const progress = 
    timerMode === "focus" 
      ? 100 - (timeRemaining / (25 * 60)) * 100 
      : 100 - (timeRemaining / (5 * 60)) * 100;

  return (
    <AppLayout title="Focus Mode">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-6">Focus Mode</h2>
          <div className="flex justify-center mb-4">
            <Select value={selectedTaskId} onValueChange={setSelectedTaskId}>
              <SelectTrigger className="w-full max-w-sm">
                <SelectValue placeholder="Select a task" />
              </SelectTrigger>
              <SelectContent>
                {tasks.map((task) => (
                  <SelectItem key={task.id} value={task.id.toString()}>
                    {task.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedTask && (
          <Card className="animate-fade-in mb-8">
            <CardHeader>
              <CardTitle>{selectedTask.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{selectedTask.description}</p>
              <Badge className={getPriorityColor(selectedTask.priority)}>
                {selectedTask.priority.charAt(0).toUpperCase() + selectedTask.priority.slice(1)} Priority
              </Badge>
            </CardContent>
          </Card>
        )}

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-xl">{timerMode === "focus" ? "Focus Time" : "Break Time"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mx-auto mb-6 h-64 w-64">
              <div className="flex h-full w-full items-center justify-center rounded-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-64 w-64 -rotate-90 transform">
                    <circle
                      cx="128"
                      cy="128"
                      r="120"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.1"
                      strokeWidth="8"
                    />
                    <circle
                      cx="128"
                      cy="128"
                      r="120"
                      fill="none"
                      stroke={timerMode === "focus" ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                      strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 120}
                      strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="z-10 text-5xl font-bold">{formatTime(timeRemaining)}</div>
              </div>
            </div>
            <Progress value={progress} className="mb-4 h-2" />
          </CardContent>
          <CardFooter className="flex justify-center gap-4 pb-6">
            <Button onClick={toggleTimer} size="lg">
              {timerActive ? (
                <>
                  <Pause className="mr-2 h-5 w-5" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" /> Start
                </>
              )}
            </Button>
            <Button variant="outline" onClick={resetTimer} size="lg">
              <SkipForward className="mr-2 h-5 w-5" /> Skip
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Focus;
