import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.White
    },
    NavigationContainer: {
        width: '100%',
        height: null,
        paddingHorizontal: 16,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftAccessory: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    arrowContainer: {
        width: 8.41,
        height: 14,
        left: 6.59,
    },
    arrowIcon: {
        width: '100%',
        height: '100%'
    },
    rightAccessoryEmpty: {
        width: 40,
        height: 40,
    },
    authTitle: {
        flex: 1,
        textAlign: 'center',
        color: Colors.Black,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24
    },
    titleContainer: {
        marginTop: 25,
        alignSelf: 'center',
        flexDirection: 'column'
    },
    topTitle: {
        width :114,
        resizeMode: 'cover',
        height: 39,
        tintColor: Colors.Pink
    },
    bottomTitle: {
        marginTop: 1,
        width :114,
        resizeMode: 'cover',
        height: 30,
        tintColor: Colors.Black
    },
    enterTextContainer: {
        width: '100%',
        marginTop: 47,
        justifyContent: 'center',
        alignItems: 'center'
    },
    enterText: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.Black
    },
    inputsContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 28,
    },
    separator: {
        width: '100%',
        height: 10
    },
    dontRememberPassText: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 24,
        color: Colors.Pink,
        textAlign: 'center',
        marginTop: 16
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    secondaryRegContainer: {
        
    }
})
