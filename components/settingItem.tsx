import { Text, TouchableOpacity, View } from "react-native"

interface SettingItemProps {
  SettingIcon: JSX.Element;
  heading: string;
  clickHandler?: () => void;
  className?: string;
}

const SettingItem = ({
  SettingIcon,
  heading,
  clickHandler,
  className,
}: SettingItemProps) => {
  return (
    <TouchableOpacity 
      className={`flex flex-row items-center gap-4 p-2 w-3/4 mb-6
      shadow-soft-2" ${className}`}
      onPress={clickHandler}
    >
      <View className="flex">
        {SettingIcon}
      </View>
      <View className="flex">
        <Text className="text-2xl font-bold">
          {heading}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;