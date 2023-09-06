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
        width: 24,
        height: 24,
        left: 6.59,
    },
    arrowIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    rightAccessoryEmpty: {
        width: 40,
        height: 40,
    },
    raffleTitle: {
        flex: 1,
        textAlign: 'center',
        color: Colors.White,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24
    },
    titleContainer: {
        marginTop: 25,
        alignSelf: 'center',
        flexDirection: 'column'
    },
    question: {
        width: 24,
        height: 24
    },
    topTitle: {
        width :160,
        resizeMode: 'cover',
        height: 55,
        tintColor: Colors.Pink
    },
    bottomTitle: {
        marginTop: 1,
        width :160,
        resizeMode: 'cover',
        height: 42,
        tintColor: Colors.White
    },
    leftToRaffle: {
        width: '100%',
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    raffleToday: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    enterText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16,
        color: Colors.White,
        marginHorizontal: 24
    },
    timerContainer: {
        width: 318,
        height: 106,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    timer: {
       width: '100%',
       resizeMode: 'contain',
       height: '100%'
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
        justifyContent: 'flex-end'
    },
    secondaryRegContainer: {
        
    }
})
