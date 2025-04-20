
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutGrid, 
  ListTodo, 
  Timer, 
  BarChart2, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutGrid className="h-5 w-5" />,
      href: "/dashboard",
    },
    {
      title: "Tasks",
      icon: <ListTodo className="h-5 w-5" />,
      href: "/tasks",
    },
    {
      title: "Focus Mode",
      icon: <Timer className="h-5 w-5" />,
      href: "/focus",
    },
    {
      title: "Analytics",
      icon: <BarChart2 className="h-5 w-5" />,
      href: "/analytics",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-sidebar text-sidebar-foreground",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-highlight text-white">
            <span className="text-sm font-bold">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-highlight">BoostFlow</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-sidebar-foreground",
                location.pathname === item.href
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link to="/login" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
