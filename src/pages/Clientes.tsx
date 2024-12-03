import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NewClientDialog } from "@/components/dialogs/NewClientDialog";

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dados de exemplo
  const clientes = [
    {
      id: 1,
      nome: "Empresa ABC",
      responsavel: "João Silva",
      email: "joao@empresaabc.com",
      telefone: "(11) 99999-9999",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Startup XYZ",
      responsavel: "Maria Santos",
      email: "maria@startupxyz.com",
      telefone: "(11) 88888-8888",
      status: "Em Pausa",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Clientes</h1>
          <p className="text-gray-600 mt-1">Gerencie seus clientes</p>
        </div>
        <NewClientDialog />
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-600">
                  Nome
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">
                  Responsável
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">
                  Email
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">
                  Telefone
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr
                  key={cliente.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{cliente.nome}</td>
                  <td className="py-3 px-4">{cliente.responsavel}</td>
                  <td className="py-3 px-4">{cliente.email}</td>
                  <td className="py-3 px-4">{cliente.telefone}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        cliente.status === "Ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {cliente.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Clientes;