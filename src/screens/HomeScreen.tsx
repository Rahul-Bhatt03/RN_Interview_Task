import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RoutesType";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const navigation = useNavigation<NavProp>();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-10">
        Quiz App
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        className="bg-blue-500 px-6 py-3 rounded-2xl"
      >
        <Text className="text-white text-lg font-bold">
          Start Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
}