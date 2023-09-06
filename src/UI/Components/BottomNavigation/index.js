import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Styles } from './styles'
import { Images } from '../../../Resources/Images/Images'

export const BottomNavigation = () => {

    return (
        <View style={Styles.container}>
            <Image source={Images.Icons.home} style={Styles.icon}></Image>    
            <Image source={Images.Icons.gift} style={Styles.icon}></Image>    
            <Image source={Images.Icons.mark} style={Styles.icon}></Image>    
            <Image source={Images.Icons.user} style={Styles.icon}></Image>    
        </View>
    )
}