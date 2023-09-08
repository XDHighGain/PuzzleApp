import { NavigateAndClearStack, GoBack } from "./RootOptions"
import { NavigationNameMainScreen } from "../UI/Screens/MainScreen"
import { NavigationNameAuthScreen } from "../UI/Screens/AuthScreen"


export const NavigateToMainScreen = () => {
    NavigateAndClearStack({
        name: NavigationNameMainScreen,
        params: null
    })
}

export const NavigateToAuthScreen = () => {
    NavigateAndClearStack({
        name: NavigationNameAuthScreen,
        params: null
    })
}

export const NavigateBack = () => {
    GoBack();
};