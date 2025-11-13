import { ReactNode } from "react";
import { Bell, Search, Settings, ChevronDown, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const getBreadcrumb = () => {
    if (location.pathname === "/") return "Trang chủ";
    if (location.pathname === "/jobs") return "Yêu cầu tuyển dụng";
    if (location.pathname.startsWith("/job/")) return "Yêu cầu tuyển dụng";
    return "";
  };

  return (
    <div className="flex min-h-screen w-full bg-content-bg">
      {/* Sidebar */}
      <aside className="w-[250px] bg-sidebar text-sidebar-foreground flex-shrink-0 fixed left-0 top-0 bottom-0 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Recruitment</span>
          </div>
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
