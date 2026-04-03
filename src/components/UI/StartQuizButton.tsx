import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "@/src/types/RoutesType";

 type NavigationProp = BottomTabNavigationProp<RootStackParamList, 'Home'>;

export default function StartQuixButton() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} className="bg-blue-500 px-6 py-3 rounded-2xl shadow-md">
        <Text className="text-white text-lg font-bold">
          Start Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
}