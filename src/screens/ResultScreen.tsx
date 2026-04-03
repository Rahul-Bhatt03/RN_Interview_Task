import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RoutesType";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
 import { RouteProp } from "@react-navigation/native";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Result">;
export default function Result() {
const navigation = useNavigation<NavProp>();

type ResultRouteProp = RouteProp<RootStackParamList, "Result">;

const route = useRoute<ResultRouteProp>();

const { score, total } = route.params;

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-6">
        Quiz Completed 🎉
      </Text>

      <Text className="text-xl mb-4">
        Your Score:
      </Text>

      <Text className="text-2xl font-bold mb-10">
        {score} / {total}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-blue-500 px-6 py-3 rounded-2xl"
      >
        <Text className="text-white text-lg font-bold">
          Restart Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
}