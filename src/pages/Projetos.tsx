import { Card } from "@/components/ui/card";
import { NewProjectDialog } from "@/components/dialogs/NewProjectDialog";

const Projetos = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Projetos</h1>
          <p className="text-gray-600 mt-1">Gerencie seus projetos</p>
        </div>
        <NewProjectDialog />
      </div>

      <Card className="p-6">
        <p className="text-gray-500">Em desenvolvimento...</p>
      </Card>
    </div>
  );
};

export default Projetos;