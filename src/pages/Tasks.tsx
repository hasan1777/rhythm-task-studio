
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Calendar, Clock, Edit, LayoutGrid, LayoutList, MoreHorizontal, Plus, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion/Motion";

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
  {
    id: 4,
    title: "Update documentation",
    description: "Update the user documentation with the latest features and improvements.",
    dueDate: "2025-04-24",
    priority: "medium",
    completed: true,
  },
  {
    id: 5,
    title: "Code review",
    description: "Review pull requests and provide feedback on code quality and implementation.",
    dueDate: "2025-04-25",
    priority: "high",
    completed: false,
  },
];

// Helper function to get priority badge color
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

const Tasks = () => {
  const [viewMode, setViewMode] = useState<"card" | "table">("card");

  return (
    <AppLayout title="Tasks">
      <div className="mb-6 flex items-center justify-between">
        <motion.h2 
          className="text-xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Tasks
        </motion.h2>
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode === "card" ? "card-active" : "card-inactive"}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <Button 
                variant={viewMode === "card" ? "default" : "outline"} 
                size="icon"
                onClick={() => setViewMode("card")}
              >
                <LayoutGrid className="h-5 w-5" />
              </Button>
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode === "table" ? "table-active" : "table-inactive"}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <Button 
                variant={viewMode === "table" ? "default" : "outline"} 
                size="icon"
                onClick={() => setViewMode("table")}
              >
                <LayoutList className="h-5 w-5" />
              </Button>
            </motion.div>
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Task
            </Button>
          </motion.div>
        </div>
      </div>

      {viewMode === "card" ? (
        <motion.div
          key="card-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <StaggerItem key={task.id}>
                <Card className={cn({ "opacity-70": task.completed })}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <Checkbox id={`task-${task.id}`} checked={task.completed} />
                        <CardTitle className={cn("text-base", { "line-through": task.completed })}>
                          {task.title}
                        </CardTitle>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="-mr-2">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Trash className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Due: {task.dueDate}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                    </Badge>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      ) : (
        <motion.div
          key="table-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task, index) => (
                    <motion.tr
                      key={task.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={cn("border-b transition-colors hover:bg-muted/50", {
                        "opacity-70": task.completed,
                      })}
                    >
                      <TableCell>
                        <Checkbox id={`task-list-${task.id}`} checked={task.completed} />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className={cn({ "line-through": task.completed })}>
                          {task.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {task.description.length > 60
                            ? `${task.description.substring(0, 60)}...`
                            : task.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          {task.dueDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Trash className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AppLayout>
  );
};

export default Tasks;
