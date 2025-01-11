import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Stack.Screen options={{ title: "Oops !?"}} />
      <View className="flex text-center">
        <Text className="font-bold text-2xl text-center">
          你是怎么找到这里的？快回到首页吧
        </Text>
        <Link href='/' asChild>
          <Button>
            <ButtonText>
              Go Home
            </ButtonText>
          </Button>
        </Link>
      </View>
    </View>
  );
}
