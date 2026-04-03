import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import OptionButton from "../components/UI/OptionButton";
import questionData from "../utils/question.json";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RoutesType";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Quiz">;

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

const navigation = useNavigation<NavProp>();

  const data = questionData.questions;
  const currentQuestion = data[currentIndex];
  const progress = (currentIndex + 1) / data.length;

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    setShuffledOptions(shuffleArray(currentQuestion.options));
  }, [currentIndex]);

  const handleOptionPress = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion.answer;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        navigation.navigate("Result", {
          score: isCorrect ? score + 1 : score,
          total: data.length,
        });
      }
    }, 1000);
  };

  return (
    <View className="flex-1 p-4 justify-center">

      <View className="mb-4">
        {/* Progress Text */}
        <Text className="text-sm mb-1">
          Question {currentIndex + 1} / {data.length}
        </Text>

        {/* Progress Bar Background */}
        <View className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">

          {/* Progress Fill */}
          <View
            className="h-3 bg-blue-500"
            style={{ width: `${progress * 100}%` }}
          />

        </View>
      </View>

      <Text className="text-xl font-bold mb-4">
        {currentQuestion.question}
      </Text>

      <OptionButton
        options={shuffledOptions}
        selectedOption={selectedOption}
        correctAnswer={currentQuestion.answer}
        isAnswered={isAnswered}
        onPress={handleOptionPress}
      />
    </View>
  );
}