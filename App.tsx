import React, { useState } from "react";
import {View, Text, Button} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import DragDrop from "./screens/DragDrop";
import VideoPlayer from "./screens/VideoPlayer";

type TabNavigatorParamList = {
  Home: undefined;
  DragDrop: undefined;
  VideoPlayer: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

type Props = BottomTabScreenProps<TabNavigatorParamList, 'Home'>;

function HomeScreen({ route, navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Drag Drop"
        onPress={() => navigation.navigate('DragDrop')}
      />
      <Button
        title="Go to Video Player"
        onPress={() => navigation.navigate('VideoPlayer')}
      />
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="DragDrop" component={DragDrop} />
        <Tab.Screen name="VideoPlayer" component={VideoPlayer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="HomeScreen" component={HomeScreen} />
        <Root.Screen name="DragDrop" component={DragDrop} />
        <Root.Screen name="VideoPlayer" component={VideoPlayer} />
      </Root.Navigator>
    </NavigationContainer>

*/