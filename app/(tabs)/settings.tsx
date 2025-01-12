import { SafeAreaView, Text, View } from "react-native"
import Header from "@/components/header";
import { CalendarDaysIcon, HelpCircleIcon, Icon, ShareIcon } from "@/components/ui/icon"
import SettingItem from "@/components/settingItem";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col">
        <Header content="设置" className="ml-10"/>
        <View className="ml-10 mt-2 w-5/6 h-[2px] bg-slate-600" />
        <View className="flex flex-col items-start w-full mt-5 ml-10">
          <SettingItem 
            heading="日志"
            SettingIcon={<Icon as={CalendarDaysIcon} color="black" className="w-8 h-8" />}
          />
          <SettingItem 
            heading="帮助"
            SettingIcon={<Icon as={HelpCircleIcon} color="black" className="w-8 h-8" />}
          />
          <SettingItem 
            heading="关于"
            SettingIcon={<Icon as={ShareIcon} color="black" className="w-8 h-8" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;