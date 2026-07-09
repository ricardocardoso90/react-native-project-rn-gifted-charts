import { useState } from "react";
import { useWindowDimensions, View } from "react-native";

import { PeriodRange, sampleData } from "@/utils/data";

import { Chart } from "@/components/Chart";
import { Header } from "@/components/Header";
import { RangeSelector } from "@/components/RangeSelector";

export default function Index() {
  const [selectedRange, setSelectedRange] = useState<PeriodRange>("1M");

  const { width } = useWindowDimensions();
  const chartData = sampleData[selectedRange];

  return (
    <View className="flex-1 bg-black">
      <Header />
      <Chart data={chartData} width={width} />
      <RangeSelector
        selectedRange={selectedRange}
        onRangeChange={setSelectedRange}
      />
    </View>
  );
}
