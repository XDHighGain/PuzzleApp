import { StyleSheet } from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        backgroundColor: Colors.Grey,
        borderRadius: 8,
    },
    input: {
        paddingHorizontal: 16,
        fontSize: 17,
        fontWeight: '400',
        flex: 1
    },
    rightContent: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        tintColor: Colors.GreyPlaceholder,
        resizeMode: 'contain',
        marginHorizontal: 16
    }
})
