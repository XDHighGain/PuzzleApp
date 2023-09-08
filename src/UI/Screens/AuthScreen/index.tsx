import React from "react";
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { Styles } from "./styles";
import { Strings } from "../../../Resources/Strings";
import { Images } from "../../../Resources/Images/Images";
import { AuthTextInput } from "../../Components/AuthTextInput";
import { ButtonPrimary } from "../../Components/ButtonPrimary";
import { Colors } from "../../../Resources/Colors";
import { AuthScreenModel } from "./model";
import { DismissKeyboard } from "../../Components/DismissKeyboard";

export const NavigationNameAuthScreen = 'NavigationNameAuthScreen';

export const AuthScreen = () => {
    const {
        loginValue,
        passwordValue,
        handleSubmit,
        handleLoginChange,
        handlePasswordChange,       
    } = AuthScreenModel();

    return (
        <View style={Styles.screen}>
            <DismissKeyboard>
            <View style={{flex: 1}}>
            <View style={Styles.NavigationContainer}>
                <TouchableOpacity activeOpacity={0.5} style={Styles.leftAccessory}>
                    <View style={Styles.arrowContainer}>
                        <Image style={Styles.arrowIcon} source={Images.Icons.arrow} />
                    </View>
                </TouchableOpacity>
                <Text style={Styles.authTitle}>{Strings.auth}</Text>
                <View style={Styles.rightAccessoryEmpty}></View>
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={Styles.titleContainer}>
                    <Image style={Styles.topTitle} source={Images.Drawable.all} />
                    <Image style={Styles.bottomTitle} source={Images.Drawable.promotion} />
                </View>
                <View style={Styles.enterTextContainer}>
                    <Text style={Styles.enterText}>
                        {Strings.enter}
                    </Text>
                </View>
                <View style={Styles.inputsContainer}>
                    <AuthTextInput
                        value={loginValue}
                        onValueChange={handleLoginChange}
                        placeholder={Strings.loginPlaceholder} />
                    <View style={Styles.separator} />
                    <AuthTextInput
                        value={passwordValue}
                        secureInput={true}
                        rightContent={true}
                        onValueChange={handlePasswordChange}
                        placeholder={Strings.passwordPlaceholder} />
                </View>
                <ButtonPrimary
                    onPress={handleSubmit}
                    title={Strings.enter}
                    buttonStyle={{ backgroundColor: Colors.Pink }}></ButtonPrimary>
                <Text style={Styles.dontRememberPassText}>{Strings.dontRememberPass}</Text>
                <View style={Styles.bottomContainer}>
                    <View style={Styles.secondaryRegContainer}>
                        <ButtonPrimary
                            title={Strings.loginByVK}
                            imageSource={Images.Icons.vk}
                            imageStyle={{ width: 24, height: 15 }}
                            titleStyle={{ fontWeight: '500', lineHeight: 20 }}
                            buttonStyle={{ backgroundColor: Colors.Blue }}></ButtonPrimary>
                        <View style={Styles.separator} />
                        <ButtonPrimary
                            imageSource={Images.Icons.yandex}
                            imageStyle={{ width: 13, height: 20 }}
                            title={Strings.loginByYandex}
                            titleStyle={{ fontWeight: '500', lineHeight: 20 }}
                            buttonStyle={{ backgroundColor: Colors.Red }}></ButtonPrimary>
                    </View>
                    <View style={Styles.enterTextContainer}>
                        <Text style={Styles.enterText}>
                            {Strings.registration}
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
            </View>
            </DismissKeyboard>
        </View>
    )
}
