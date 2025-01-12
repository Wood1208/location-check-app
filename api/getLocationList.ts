import AsyncStorage from "@react-native-async-storage/async-storage"

export const getLocationList = async () => {
  let locations = await AsyncStorage.getItem('locations');

  if(locations !== null) {
    console.log("return locationsList!")
    return JSON.parse(locations);
  } else {
    console.log("return locationsList wrong!")
    return [];
  }

}