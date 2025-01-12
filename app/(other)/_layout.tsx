import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function OtherLayout() {
  return (
    <>
      <StatusBar style="auto" translucent={true} backgroundColor="transparent" />
      <Stack>
        <Stack.Screen name="locationList" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}