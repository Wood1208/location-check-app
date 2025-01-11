import { Text, View } from "react-native"
import { Image } from "@/components/ui/image";

interface HeaderProps {
  content: string;
  isShowLogo?: boolean;
  className?: string;
}

const Header = ({
  content,
  isShowLogo = true,
  className,
}: HeaderProps) => {
  return (
    <View 
      className={`flex flex-row items-center mt-20 mb-10" ${className}`}
    >
      {isShowLogo && <Image
        source={require("@/assets/images/react-logo.png")}
        size="lg"
        alt="Logo"
        className="mr-4"
      />}
      <Text className="flex text-3xl font-bold">
        {content}
      </Text>
    </View>
  )
}

export default Header;