import { Text, View } from "react-native";

export function Header() {
  return (
    <View className="mt-32 px-4">
      <Text className="text-gray-400 text-md font-medium mb-2">Evolução dos Investimentos</Text>
      <Text className="text-white text-6xl font-medium">R$ 0,00</Text>
    </View>
  );
};