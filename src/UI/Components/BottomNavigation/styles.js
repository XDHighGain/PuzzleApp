import { StyleSheet } from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        width: '100%',
        height: 70,
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        marginTop: 37,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 32,
        height: 32,
        marginHorizontal: 13
    }
})