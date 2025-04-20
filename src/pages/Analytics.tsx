
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";

// Placeholder data
const weeklyTasksData = [
  { name: "Mon", completed: 4, total: 6 },
  { name: "Tue", completed: 6, total: 8 },
  { name: "Wed", completed: 5, total: 7 },
  { name: "Thu", completed: 8, total: 10 },
  { name: "Fri", completed: 3, total: 5 },
  { name: "Sat", completed: 2, total: 3 },
  { name: "Sun", completed: 1, total: 2 },
];

const monthlyXPData = [
  { name: "Week 1", xp: 320 },
  { name: "Week 2", xp: 450 },
  { name: "Week 3", xp: 280 },
  { name: "Week 4", xp: 580 },
];

const taskCategoriesData = [
  { name: "Work", value: 45 },
  { name: "Personal", value: 25 },
  { name: "Learning", value: 20 },
  { name: "Health", value: 10 },
];

const focusTimeData = [
  { name: "Mon", minutes: 45 },
  { name: "Tue", minutes: 75 },
  { name: "Wed", minutes: 60 },
  { name: "Thu", minutes: 90 },
  { name: "Fri", minutes: 30 },
  { name: "Sat", minutes: 15 },
  { name: "Sun", minutes: 30 },
];

const COLORS = ["#9b87f5", "#0EA5E9", "#F97316", "#10B981"];

const Analytics = () => {
  return (
    <AppLayout title="Analytics">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Your Progress Analytics</h2>
        <p className="text-muted-foreground">Track your productivity and growth</p>
      </div>

      <Tabs defaultValue="tasks">
        <TabsList className="mb-4">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="xp">XP Progress</TabsTrigger>
          <TabsTrigger value="focus">Focus Time</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tasks" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Tasks Completion</CardTitle>
                <CardDescription>
                  Track your weekly task completion rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyTasksData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="total" name="Total Tasks" fill="#9b87f5" opacity={0.4} />
                      <Bar dataKey="completed" name="Completed" fill="#9b87f5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Task Categories</CardTitle>
                <CardDescription>
                  Distribution of tasks by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={taskCategoriesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {taskCategoriesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="xp" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly XP Earned</CardTitle>
              <CardDescription>
                Track your earned experience points over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyXPData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} XP`, "Experience Points"]} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="xp"
                      name="XP"
                      stroke="#9b87f5"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total XP Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,580</div>
                <p className="text-xs text-muted-foreground">
                  Level 5 (86% to Level 6)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Weekly Average
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">407</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 days</div>
                <p className="text-xs text-muted-foreground">
                  Best: 14 days
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="focus" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Focus Time</CardTitle>
              <CardDescription>
                Minutes spent in focus mode each day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={focusTimeData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`${value} mins`, "Focus Time"]} />
                    <Bar dataKey="minutes" name="Minutes" fill="#0EA5E9" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Focus Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">345 mins</div>
                <p className="text-xs text-muted-foreground">
                  5 hours 45 minutes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Daily Average
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">49.3 mins</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Longest Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90 mins</div>
                <p className="text-xs text-muted-foreground">
                  Thursday
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Analytics;
