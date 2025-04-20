
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, CheckCircle, Clock, ListTodo } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/motion/Motion";

const Dashboard = () => {
  return (
    <AppLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total XP Points
            </CardTitle>
            <div className="h-4 w-4 rounded-full bg-highlight" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,580</div>
            <p className="text-xs text-muted-foreground">
              +20% from last week
            </p>
          </CardContent>
        </Card>
        <Card className="animate-slide-up animation-delay-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tasks Completed
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-boost-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/36</div>
            <p className="text-xs text-muted-foreground">
              67% completion rate
            </p>
          </CardContent>
        </Card>
        <Card className="animate-slide-up animation-delay-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Focus Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-boost-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5</div>
            <p className="text-xs text-muted-foreground">
              +4.5 from last week
            </p>
          </CardContent>
        </Card>
        <Card className="animate-slide-up animation-delay-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Streak
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-boost-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 days</div>
            <p className="text-xs text-muted-foreground">
              Best: 14 days
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">Level Progress</h3>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Level 5</span>
            <span className="text-sm font-medium">2,580 / 3,000 XP</span>
          </div>
          <Progress value={86} className="h-2" />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">Recent Tasks</h2>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>All Tasks</CardTitle>
                <CardDescription>Manage all your tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Complete project proposal</div>
                        <div className="text-sm text-muted-foreground">High Priority</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due today</div>
                  </div>
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <ListTodo className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Review analytics dashboard</div>
                        <div className="text-sm text-muted-foreground">Medium Priority</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due tomorrow</div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <ListTodo className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Team meeting preparation</div>
                        <div className="text-sm text-muted-foreground">Low Priority</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due in 2 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="today" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
                <CardDescription>Tasks due today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Complete project proposal</div>
                        <div className="text-sm text-muted-foreground">High Priority</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due today</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upcoming" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Tasks due in the future</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <ListTodo className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Review analytics dashboard</div>
                        <div className="text-sm text-muted-foreground">Medium Priority</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due tomorrow</div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <ListTodo className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Team meeting preparation</div>
                        <div className="text-sm text-muted-foreground">Low Priority</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due in 2 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
