import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { Styles } from "./styles";
import { Images } from "../../../Resources/Images/Images";

export const NavigationNameMainScreen = 'NavigationNameMainScreen';

export const BottomNavigationItem = ({ title, index }) => {

    const ImageSource = () => {
        switch (title) {
            case 'home':
                return Images.Icons.home;
                break;
            case 'bookmark':
                return Images.Icons.bookmark;
                break;
            case 'favorite':
                return Images.Icons.favorite;
                break;
            case 'user':
                return Images.Icons.user;
                break;
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={Styles.itemContainer}>
            <Image source={ImageSource()} ></Image>
            <Text></Text>
        </TouchableOpacity>
    )
}