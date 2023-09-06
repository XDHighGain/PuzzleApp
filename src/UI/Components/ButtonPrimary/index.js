import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Styles } from './styles'

export const ButtonPrimary = ({ title, onPress, titleStyle, buttonStyle, imageSource, imageStyle}) => {

    const handlePress = () => { 
        if(onPress)
            onPress();
    }
    return(
        <TouchableOpacity 
        onPress={handlePress}  
        activeOpacity={0.6} 
        style={[Styles.button, buttonStyle]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {imageSource != null &&
            <Image style={[imageStyle, {marginRight: 10}]} source={imageSource}></Image>
            }
           <Text style={[Styles.buttonTitle, titleStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}