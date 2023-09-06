import React from "react";
import { TextInput, View, Text, Image } from "react-native";
import { Styles } from "./styles";
import { Images } from "../../../Resources/Images/Images";
import { Colors } from "../../../Resources/Colors";


export const AuthTextInput = ({value, placeholder, secureInput, onValueChange, rightContent }) => {

    const handleTextChange = (newValue) => {
        if (onValueChange)
            onValueChange(newValue);
    }

    return (
        <View style={Styles.container}>
            <TextInput
                value={value}
                placeholderTextColor={Colors.TextPlaceholder}
                secureTextEntry={secureInput}
                onChangeText={newValue => handleTextChange(newValue)}
                placeholder={placeholder}
                style={Styles.input}>
            </TextInput>
            {rightContent &&
                <Image style={Styles.rightContent} source={Images.Icons.eye}></Image>}
        </View>
    )
}
