import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

interface IDismiss {
    children: React.ReactNode
}

export const DismissKeyboard: React.FC<IDismiss> = (props) => {
    const [isKeyboardOpened, setiSKeyboardOpened] = useState(false);
    useEffect(() => {
        let isSubscribed = true;
        Keyboard.addListener('keyboardDidShow', () => {
            if (isSubscribed)
                setiSKeyboardOpened(() => true)
        });
        Keyboard.addListener('keyboardDidHide', () => {
            if (isSubscribed)
                setiSKeyboardOpened(() => false)
        });
        return () => {
            Keyboard.removeAllListeners('keyboardDidShow');
            Keyboard.removeAllListeners('keyboardDidHide');
            isSubscribed = false;
        }
    }, [])

    return (
        <TouchableWithoutFeedback disabled={!isKeyboardOpened} onPress={() => Keyboard.dismiss()}>
            {props.children}
        </TouchableWithoutFeedback>
    )

}