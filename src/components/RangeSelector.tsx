import { Pressable, Text, View } from "react-native";

import { PeriodRange, periodRanges } from "@/utils/data";

type RangeSelectorProps = {
  selectedRange: PeriodRange;
  onRangeChange: (range: PeriodRange) => void;
};

export function RangeSelector({ selectedRange, onRangeChange }: RangeSelectorProps) {
  return (
    <View className="flex-row items-center justify-center gap-2 px-4 mt-6">
      {periodRanges.map((range) => {
        const isSelected = range === selectedRange;

        return (
          <Pressable
            key={range}
            onPress={() => onRangeChange(range)}
            className={`px-4 py-2 rounded-full ${isSelected ? "bg-[#308AF8]" : "bg-gray-900"}`}
          >
            <Text
              className={`text-sm font-medium ${isSelected ? "text-white" : "text-gray-400"}`}
            >
              {range}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
