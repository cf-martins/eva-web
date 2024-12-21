import { ChartLineLinear } from "@/components/chart-line-linear";
import { ChartRadialText } from "@/components/chart-radial-text";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <ChartRadialText />
        <ChartRadialText />
        <ChartRadialText />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <ChartLineLinear />
      </div>
    </div>
  );
}