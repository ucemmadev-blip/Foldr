import { Plus } from "lucide-react";
import { Button } from "../../../@/components/ui/button";
import { Card, CardContent, CardHeader } from "../../../@/components/ui/card";

export const LargeFiles = () => {
  const largeData = [
    { name: "To.mp4", size: "2GB" },
    { name: "YT.mp4", size: "400MB" },
    { name: "abc.mp4", size: "340MB" },
  ];
  return (
    <>
      <Card>
        <CardHeader>
          <h3>Largest files</h3>
        </CardHeader>

        <CardContent>
          {largeData.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center mx-5 mt-2"
            >
              <p>{item.name}</p>
              <p>{item.size}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button className="p-5 ">
          <Plus />
          Add New
        </Button>
      </div>
    </>
  );
};
