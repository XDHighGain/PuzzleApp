import { NavigateAndClearStack, GoBack } from "./RootOptions"
import { NavigationNameMainScreen } from "../UI/Screens/MainScreen"
import { NavigationNameAuthScreen } from "../UI/Screens/AuthScreen"


export const NavigateToMainScreen = () => {
    NavigateAndClearStack({
        name: NavigationNameMainScreen
    })
}

export const NavigateToAuthScreen = () => {
    NavigateAndClearStack({
        name: NavigationNameAuthScreen
    })
}

export const NavigateBack = () => {
    GoBack();
};