import { BarChart } from "@/components/ui/charts/bar-chart";
import { LineChart } from "@/components/ui/charts/line-chart";
import { PieChart } from "@/components/ui/charts/pie-chart";
import { RadarChart } from "@/components/ui/charts/radar-chart";
import { RadialChart } from "@/components/ui/charts/radial-chart";
import { mockDataRadialBarChart } from "@/shared/constants/mock/mock-data-radial-bar-chart";
import { mockRadialCharts } from "@/shared/constants/mock/mock-radial-charts";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockRadialCharts.map(({ title, description, footerText }, index) => (
          <RadialChart
            key={index}
            title={title}
            description={description}
            footerText={footerText}
            data={mockDataRadialBarChart}
          />
        ))}
      </div>

      <BarChart />
      <LineChart />
      <div className="grid  grid-cols-1 gap-2 md:grid-cols-2">
        <PieChart />
        <RadarChart />
      </div>
    </div>
  );
}
