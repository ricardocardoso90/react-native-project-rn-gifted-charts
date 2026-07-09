import { View } from "react-native";

import { LineChart, LineChartPropsType } from "react-native-gifted-charts";

type ChartProps = LineChartPropsType & {};

export function Chart({ ...rest }: ChartProps) {
  return (
    <View>
      <LineChart
        adjustToWidth
        height={200}
        initialSpacing={0}
        endSpacing={0}
        thickness={5}
        color="#308AF8"
        hideRules
        hideDataPoints
        areaChart
        curved
        startFillColor="rgba(33, 103, 255, 0.35)"
        endFillColor="rgba(5, 7, 14, 0)"
        startOpacity={1}
        endOpacity={0}
        isAnimated
        animationDuration={800}
        animateOnDataChange
        yAxisLabelWidth={0}

        {...rest}
      />
    </View>
  );
};