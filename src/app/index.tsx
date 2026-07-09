import { View } from "react-native";

import { sampleData } from "@/utils/data";

import { Chart } from "@/components/Chart";
import { Header } from "@/components/Header";

export default function Index() {
  const data = sampleData["1M"];

  return (
    <View className="flex-1 bg-black">
      <Header />
      <Chart data={data} />
    </View>
  )
};