import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonColor,
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal: 16,
        height: 48
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.White,
        lineHeight: 28
    },
    image: {
        justifyContent: 'center'
    }
})