import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ProduceRow {
  produce: string;
  stock: string;
  price: string;
}

interface Props {
  produce: ProduceRow[];
  onAdd: () => void;
}

const ProduceInventory = ({ produce, onAdd }: Props) => {
  return (
    <Card className="p-6 rounded-2xl shadow-md bg-white">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-lg text-[#404040]">Produce Inventory</h3>
        <Button
          className="bg-secondary hover:bg-secondary/80 text-grany rounded-full px-4 py-2 text-sm"
          onClick={onAdd}
        >
          Add Produce
        </Button>
      </div>

      <div className="space-y-3">
        {produce.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-gray-50 rounded-md p-3 text-[#404040]"
          >
            <p className="font-medium">{item.produce}</p>
            <p>{item.stock}</p>
            <p className="text-right font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProduceInventory;
