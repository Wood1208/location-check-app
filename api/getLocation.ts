import Geolocation from 'react-native-geolocation-service';

export const getLocation = () => {
  return new Promise<{ latitude: number, longitude: number }>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log({ latitude, longitude });
        resolve({ latitude, longitude });
      },
      (error) => {
        console.log(error);
        reject(error); // 返回错误
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  });
};
