import React from "react";
import { TextInput, View, Image } from "react-native";
import { Styles } from "./styles";
import { Images } from "../../../Resources/Images/Images";
import { Colors } from "../../../Resources/Colors";

interface IInput {
    value: string,
    placeholder: string,
    secureInput?: boolean,
    onValueChange: (value: string) => void,
    rightContent?: boolean
}

export const AuthTextInput: React.FC<IInput> = (props) => {

    const handleTextChange = (newValue: string) => {
        props.onValueChange(newValue);
    }

    return (
        <View style={Styles.container}>
            <TextInput
                value={props.value}
                placeholderTextColor={Colors.TextPlaceholder}
                secureTextEntry={props.secureInput}
                onChangeText={(e: string) => handleTextChange(e)}
                placeholder={props.placeholder}
                style={Styles.input}>
            </TextInput>
            {props.rightContent &&
                <Image style={Styles.rightContent} source={Images.Icons.eye}></Image>}
        </View>
    )
}
