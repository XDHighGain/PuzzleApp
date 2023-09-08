import { View, TouchableOpacity, Text, Image, ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native'
import { Styles } from './styles'
import React from 'react'


interface IButton {
    title: string,
    onPress?: () => any,
    titleStyle?: TextStyle,
    buttonStyle?: ViewStyle,
    imageSource?: ImageSourcePropType,
    imageStyle?: ImageStyle,
}

export const ButtonPrimary: React.FunctionComponent<IButton> = (props) => {
    const handlePress = () => {
        if (props.onPress != undefined)
            props.onPress();
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.6}
            style={[Styles.button, props.buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {props.imageSource != null &&
                    <Image style={[props.imageStyle, { marginRight: 10 }]} source={props.imageSource}></Image>
                }
                <Text style={[Styles.buttonTitle, props.titleStyle]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}