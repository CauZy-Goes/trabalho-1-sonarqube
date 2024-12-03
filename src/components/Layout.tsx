import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Users, Briefcase, CheckSquare, DollarSign, LayoutDashboard, LogOut, Sun, Moon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { useTheme } from "next-themes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Clientes", path: "/clientes" },
    { icon: Briefcase, label: "Projetos", path: "/projetos" },
    { icon: CheckSquare, label: "Tarefas", path: "/tarefas" },
    { icon: DollarSign, label: "Financeiro", path: "/financeiro" },
  ];

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/auth");
      toast({
        title: "Logout realizado com sucesso",
        description: "Você foi desconectado do sistema",
      });
    } catch (error) {
      toast({
        title: "Erro ao realizar logout",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background flex">
      <aside
        className={`bg-card border-r border-border transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && "hidden"}`}>
            Consultoria
          </h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-foreground hover:bg-accent transition-colors ${
                location.pathname === item.path && "bg-primary/10 text-primary"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && (
                <span className="ml-3 text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              className="text-foreground"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-2" />
              {isSidebarOpen && "Sair"}
            </Button>
          </div>
        </header>
        <div className="p-6 animate-fade-in">{children}</div>
      </main>
    </div>
  );
};

export default Layout;