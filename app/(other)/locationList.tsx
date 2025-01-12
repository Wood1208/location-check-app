import { FlatList, Text, View } from "react-native"
import FlexButton from "@/components/flexButton";
import { AddIcon, Icon } from "@/components/ui/icon";

import { getLocationList } from "@/api/getLocationList";
import { storedLocations } from "@/api/storedLocation";
import { useEffect, useState } from "react";
import { InputDialog } from "@/components/InputDialog";


const renderItem = ({ item } : any) => {
  return (
  <View className="flex flex-row w-full items-center">
    <Text className="text-2xl font-bold">
      {item.name}
    </Text>
    <Text className="text-xs font-normal">
      {item.latitude} {item.longitude}
    </Text>
  </View>
  )
}

const LocationList = () => {
  const [isDialogShow, setIsDialogShow] = useState(false);
  const [name, setName] = useState<string>("");
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locationData = await getLocationList();
      console.log("locationData" + locationData);
      setLocations(locationData);
    }
  }, [])

  const openDialog = () => {
    setIsDialogShow(true);
  }

  const closeDialog = () => {
    setIsDialogShow(false);
  }

  const cancelDialog = () => {
    setName("");

    setIsDialogShow(false);
  }

  const handleNameChange = (text: string) => {
    setName(text);
  }

  const createNewLocation = async () => {
    setIsDialogShow(true);

    if(name) {
      await storedLocations({ name });

      setName("");
      setIsDialogShow(false);
    }
  }

  return (
    <View className="flex flex-col w-full items-center">
      <FlatList 
        data={locations}
        renderItem={ renderItem }
        keyExtractor={item => item.id.toString()}
      />
      <FlexButton
        heading="新建定位"
        ButtonIcon= { <Icon as={AddIcon} className="w-8 h-8" /> }
        clickHandler={() => setIsDialogShow(true)}
        className="mt-10"
      />
      {
        isDialogShow && (
          <InputDialog 
            onClose={closeDialog} 
            onCancel={cancelDialog}
            name={name}
            handleNameChange={handleNameChange}
            onSubmit={createNewLocation}
          />
        )
      }
    </View>
  )
}

export default LocationList;