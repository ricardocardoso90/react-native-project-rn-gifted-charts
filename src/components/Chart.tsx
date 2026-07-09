import { View } from "react-native";

import { LineChart, LineChartPropsType } from "react-native-gifted-charts";

type ChartProps = LineChartPropsType & {};

export function Chart({ ...rest }: ChartProps) {
  return (
    <View>
      <LineChart
        adjustToWidth
        initialSpacing={0}
        endSpacing={0}
        thickness1={5}
        color1="#308AF8"
        hideRules
        hideDataPoints1

        {...rest}
      />
    </View>
  );
};