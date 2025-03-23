import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";

const Tab = createBottomTabNavigator();

export function NavigationWrapper({ children }: PropsWithChildren) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Test">{() => children}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
