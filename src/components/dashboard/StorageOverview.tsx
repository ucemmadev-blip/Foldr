import { Card, CardContent, CardHeader } from "../../../@/components/ui/card";
import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../@/components/ui/chart";

export const StorageOverview = () => {
  const chartData = [
    { category: "Documents", storage: 45 },
    { category: "images", storage: 30 },
    { category: "Videos", storage: 15 },
    { category: "Audio", storage: 10 },
  ];

  const chartConfig = {
    storage: {
      label: "Storage",
    },
  };

  const storageData = [
  { name: "Video", size: "4.5GB" },
  { name: "Audio", size: "2.5GB" },
  { name: "Photos", size: "1.5GB" },
  { name: "Documents", size: "1.5GB" },
];

  return (
    <>
      <Card>
        <CardHeader>
          <h4 className="text-lg font-bold">Storage Use</h4>
        </CardHeader>

        <CardContent>
          <ChartContainer config={chartConfig} className="h-250px w-full">
            <PieChart>
              <Pie
                data={chartData}
                dataKey={"storage"}
                nameKey={"category"}
                innerRadius={50}
              />

              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>

          <div>
            <h4 className="mx-5 font-bold text-lg">Overview</h4>

            {storageData.map((item) => (
              <div key={item.name} className="flex justify-between items-center mx-5 mt-3">
                <p>{item.name}</p>
                <p>{item.size}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
