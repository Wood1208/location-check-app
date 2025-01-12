import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView, View } from "react-native"

import Card from "@/components/card";
import Header from "@/components/header";
import FlexButton from "@/components/flexButton";
import { Icon, LockIcon, MenuIcon, UnlockIcon } from "@/components/ui/icon";


const BoardScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowLocation = () => {
    router.push('/locationList' as any);
  }

  return (
    <SafeAreaView>
      <View className="flex flex-col items-center">
        <Header content="定位喵" className="mb-10" />
        <FlexButton
          ButtonIcon = {
            isOpen ? <Icon as={UnlockIcon} color="green" className="w-8 h-8"/>
            : <Icon as={LockIcon} color="black" className="w-8 h-8"/>
          }
          heading={isOpen ? "定位启动" : "定位关闭"}
          content={isOpen ? "点击关闭虚拟定位" : "点击开启虚拟定位"}
          clickHandler={() => setIsOpen(!isOpen)}
          className={isOpen ? "border-green-600" : ""}
        />
        <FlexButton
          ButtonIcon = {<Icon as={MenuIcon} color="black" className="w-8 h-8"/>}
          heading="配置"
          content="当前定位设置"
          clickHandler={() => handleShowLocation()}
        />
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default BoardScreen;