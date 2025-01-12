import { Text, TouchableOpacity, View } from "react-native";

interface FlexButtonProps {
  ButtonIcon?: JSX.Element;
  heading: string;
  content?: string;
  clickHandler?: () => void;
  className?: string;
}

const FlexButton = ({
  ButtonIcon,
  heading,
  content,
  clickHandler,
  className,
}: FlexButtonProps) => {
  return (
    <TouchableOpacity 
      className={`flex flex-row items-center justify-center w-3/4 p-2 mb-6 border-2 border-gray-600 rounded-2xl shadow-soft-2" ${className}`}
      onPress={clickHandler}
    >
      <View className="flex justify-center mr-4">
        {ButtonIcon}
      </View>
      <View className="flex flex-col gap-1">
        <Text className="text-2xl font-bold">
          {heading}
        </Text>
        {content && <Text className="text-xs font-normal">
          {content}
        </Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default FlexButton;