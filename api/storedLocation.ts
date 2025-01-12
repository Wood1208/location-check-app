import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocation } from './getLocation';
import { requestLocationPermission } from './getPermission';

export const storedLocations = async (locationData: { name: string }) => {
  try {
    await requestLocationPermission();

    const currentLocation = await getLocation();

    const locationToStore = {
      name: locationData.name,
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    }

    const existingLocations = await AsyncStorage.getItem('locations');
    const parsedLocations = existingLocations ? JSON.parse(existingLocations) : [];

    const updatedLocations = [...parsedLocations, locationToStore];

    await AsyncStorage.setItem('locations', JSON.stringify(updatedLocations));

    console.log('Location saved successfully');

  } catch(error) {
    console.log('Error saving location:', error);
  }
}