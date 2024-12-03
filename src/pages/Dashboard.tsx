import { Card } from "@/components/ui/card";
import { Users, Briefcase, CheckSquare, DollarSign } from "lucide-react";

const StatCard = ({
  icon: Icon,
  label,
  value,
  trend,
}: {
  icon: any;
  label: string;
  value: string;
  trend: string;
}) => (
  <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-in">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-sm text-gray-500 mt-1">{trend}</p>
      </div>
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
  </Card>
);

const Dashboard = () => {
  const stats = [
    {
      icon: Users,
      label: "Clientes Ativos",
      value: "24",
      trend: "+2 este mês",
    },
    {
      icon: Briefcase,
      label: "Projetos em Andamento",
      value: "12",
      trend: "3 aguardando início",
    },
    {
      icon: CheckSquare,
      label: "Tarefas Pendentes",
      value: "38",
      trend: "15 para hoje",
    },
    {
      icon: DollarSign,
      label: "Receita Mensal",
      value: "R$ 45.750",
      trend: "+12% vs. último mês",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Bem-vindo ao seu painel de controle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Projetos Recentes</h2>
          <div className="space-y-4">
            {/* Placeholder para lista de projetos */}
            <p className="text-gray-500">Carregando projetos...</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Atividades Recentes</h2>
          <div className="space-y-4">
            {/* Placeholder para lista de atividades */}
            <p className="text-gray-500">Carregando atividades...</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;