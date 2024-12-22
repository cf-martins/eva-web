import { ChartLineLinear } from "@/components/chart-line-linear";
import { ChartRadialText } from "@/components/chart-radial-text";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <ChartRadialText />
        <ChartRadialText />
        <ChartRadialText />
      </div>
      <ChartLineLinear />
    </div>
  );
}
