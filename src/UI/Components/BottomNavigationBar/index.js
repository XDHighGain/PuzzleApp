import React from "react";
import { Text, View } from "react-native";
import { Styles } from "./styles";
import { BottomNavigationItem } from "../BottomNavigationItem";

export const NavigationNameMainScreen = 'NavigationNameMainScreen';

export const BottomNavigationBar = () => {
    return (
        <View style={Styles.barContainer}>
            <BottomNavigationItem title={'home'}/>
            <BottomNavigationItem title={'bookmark'}/>
            <BottomNavigationItem title={'favorites'}/>
            <BottomNavigationItem title={'user'}/>
        </View>
    )
}