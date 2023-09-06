import { StyleSheet } from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    container: {
        width: 96,
        height: 96,
        backgroundColor: Colors.White,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    countContainer: {
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: Colors.Pink,
        position: 'absolute',
        zIndex: 1,
        top: -12,
        right: -12,
        justifyContent: 'center'
    },
    count: {
        alignSelf: 'center',
        fontSize: 14,
        color: Colors.White,
        fontWeight: '600',
    },
    title: {
        marginTop: 5,
        fontSize: 14, 
        fontWeight: '600',
        color: Colors.White,
        alignSelf: 'center'
    }
})