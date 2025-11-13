import { ReactNode } from "react";
import { Bell, Search, Settings, ChevronDown, Briefcase, Home, Users, ClipboardList, FileCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface LayoutProps {
  children: ReactNode;
}

const menuItems = [
  {
    title: "Trang chủ",
    icon: Home,
    path: "/",
  },
  {
    title: "Yêu cầu tuyển dụng",
    icon: ClipboardList,
    path: "/jobs",
  },
  {
    title: "Ứng viên",
    icon: Users,
    path: "/candidates",
  },
  {
    title: "Đánh giá ứng viên",
    icon: FileCheck,
    path: "/evaluation",
  },
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const getBreadcrumb = () => {
    if (location.pathname === "/") return "Trang chủ";
    if (location.pathname === "/jobs") return "Yêu cầu tuyển dụng";
    if (location.pathname.startsWith("/job/")) return "Yêu cầu tuyển dụng";
    if (location.pathname === "/candidates") return "Ứng viên";
    if (location.pathname.startsWith("/candidate/")) return "Ứng viên";
    if (location.pathname === "/evaluation") return "Đánh giá ứng viên";
    return "";
  };

  return (
    <div className="flex min-h-screen w-full bg-content-bg">
      {/* Sidebar */}
      <aside className="w-[250px] bg-sidebar text-sidebar-foreground flex-shrink-0 fixed left-0 top-0 bottom-0 overflow-y-auto">
        <div className="p-4">
          {/* Logo Area */}
          <div className="flex flex-col items-center mb-6 mt-4">
            <div className="w-full h-[150px] bg-white/10 rounded flex items-center justify-center mb-2">
              <Briefcase className="w-16 h-16 text-white" />
            </div>
            <span className="font-semibold text-sm text-white">TUYỂN DỤNG</span>
          </div>

          {/* Search Menu */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Nhập tên menu..."
                className="w-full bg-transparent border border-white/30 rounded px-3 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                              (item.path === "/jobs" && location.pathname.startsWith("/job/")) ||
                              (item.path === "/candidates" && location.pathname.startsWith("/candidate/"));
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded transition-colors",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-[250px]">
        {/* Top Header */}
        <header className="bg-card h-16 border-b border-border sticky top-0 z-10">
          <div className="flex items-center justify-between h-full px-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-sm text-primary font-medium">{getBreadcrumb()}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-primary" />
                <Badge className="absolute -top-2 -right-2 h-5 min-w-[20px] flex items-center justify-center px-1 text-xs bg-primary border-white border-2">
                  99+
                </Badge>
              </div>
              <Settings className="w-5 h-5 text-primary" />
              <Search className="w-4 h-4 text-primary" />
              <div className="h-6 w-px bg-border" />
              <button className="flex items-center gap-2 hover:bg-muted rounded px-2 py-1">
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">HR</AvatarFallback>
                </Avatar>
                <span className="text-sm text-primary">Partner HR TD Consulting</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
};

export default Layout;
