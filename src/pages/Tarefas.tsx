import { Card } from "@/components/ui/card";
import { NewTaskDialog } from "@/components/dialogs/NewTaskDialog";

const Tarefas = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Tarefas</h1>
          <p className="text-gray-600 mt-1">Gerencie suas tarefas</p>
        </div>
        <NewTaskDialog />
      </div>

      <Card className="p-6">
        <p className="text-gray-500">Em desenvolvimento...</p>
      </Card>
    </div>
  );
};

export default Tarefas;