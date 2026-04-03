import { Text, TouchableOpacity, View } from "react-native";

type OptionProps = {
  options: string[];
  selectedOption: string | null;
  correctAnswer: string;
  isAnswered: boolean;
  onPress: (option: string) => void;
};

export default function OptionButton({
  options,
  selectedOption,
  correctAnswer,
  isAnswered,
  onPress,
}: OptionProps) {
  return (
    <View>
      {options.map((item, index) => {
        let bgColor = "bg-gray-200";

        if (isAnswered) {
          if (item === selectedOption && item === correctAnswer)
            bgColor = "bg-green-500";
          else if (item === selectedOption && item !== correctAnswer)
            bgColor = "bg-red-500";
          else if (item === correctAnswer)
            bgColor = "bg-green-300";
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(item)}
            className={`p-4 my-2 rounded-xl ${bgColor}`}
          >
            <Text className="text-lg">{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}