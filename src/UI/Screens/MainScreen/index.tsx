import React from "react";
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, ImageBackground, Alert } from "react-native";
import { Styles } from "./styles";
import { Strings } from "../../../Resources/Strings";
import { Images } from "../../../Resources/Images/Images";
import { ButtonPrimary } from "../../Components/ButtonPrimary";
import { Colors } from "../../../Resources/Colors";
import { NavigateToAuthScreen } from "../../../Navigation/Navigation";
import { ProductItem } from "../../Components/ProductItem";
import { BottomNavigation } from "../../Components/BottomNavigation";

export const NavigationNameMainScreen = 'NavigationNameMainScreen';

export const MainScreen = () => {
    const handleExit = () => {
        Alert.alert(Strings.exit, Strings.applyExit, [
            {
                text: Strings.cancel,
                style: 'cancel'
            },
            {
                text: Strings.exit,
                onPress: () => NavigateToAuthScreen()
            }
        ])
    }

    return (
        <ImageBackground source={Images.Drawable.background} style={Styles.screen}>
            <View style={Styles.NavigationContainer}>
                <TouchableOpacity onPress={handleExit} activeOpacity={0.5} style={Styles.leftAccessory}>
                    <View style={Styles.arrowContainer}>
                        <Image style={Styles.arrowIcon} source={Images.Icons.arrow2} />
                    </View>
                </TouchableOpacity>
                <Text style={Styles.raffleTitle}>{Strings.raffle}</Text>
                <View style={Styles.rightAccessoryEmpty}></View>
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={Styles.titleContainer}>
                    <Image style={Styles.topTitle} source={Images.Drawable.all} />
                    <Image style={Styles.bottomTitle} source={Images.Drawable.promotion} />
                </View>
                <View style={Styles.leftToRaffle}>
                    <View style={Styles.question}></View>
                    <Text style={Styles.enterText}>{Strings.leftToRaffle}</Text>
                    <Image source={Images.Icons.question} style={Styles.question}></Image>
                </View>
                <View style={Styles.timerContainer}>
                    <Image style={Styles.timer} source={Images.Drawable.timer}></Image>
                </View>
                <View style={Styles.raffleToday}>
                    <View style={Styles.question}></View>
                    <Text style={Styles.enterText}>{Strings.raffleToday}</Text>
                    <Image source={Images.Icons.question} style={Styles.question}></Image>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                    <ProductItem imageSource={Images.Images.macbook} title={Strings.macbook} count={1}></ProductItem>
                    <ProductItem imageSource={Images.Images.iphone} title={Strings.iphone} count={3}></ProductItem>
                    <ProductItem imageSource={Images.Images.airpods} title={Strings.airPods} count={10}></ProductItem>
                </View>
                <View style={Styles.bottomContainer}>
                    <ButtonPrimary
                        title={Strings.participate}
                        buttonStyle={{ backgroundColor: Colors.Pink }}></ButtonPrimary>
                    <BottomNavigation></BottomNavigation>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
