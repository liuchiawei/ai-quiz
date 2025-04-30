"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { cn } from "@/lib/utils";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TypeScores } from "./QuizBoard";
import { map } from "framer-motion/client";
import quizData from "@/data/quiz_hai.json";

const chartConfig = {
  value: {
    label: "正解率",
  },
} satisfies ChartConfig;

export default function RadarChartCard({
  className,
  typeScores,
}: {
  className?: string;
  typeScores: TypeScores;
}) {
  // 計算每種類型的題目總數
  const typeCounts: Record<string, number> = {};
  quizData.forEach((question) => {
    typeCounts[question.type] = (typeCounts[question.type] || 0) + 1;
  });

  const chartData = Object.entries(typeScores).map(([name, value]) => ({
    name,
    value: Math.round((value / typeCounts[name]) * 100),
  }));
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <RadarChart data={chartData}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey="name" />
          <PolarGrid />
          <Radar dataKey="value" fill="var(--accent)" fillOpacity={0.6} />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
