import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Styles } from './styles'

export const ProductItem = ({ title, titleStyle, buttonStyle, imageSource, count, imageStyle }) => {

    return (
        <View>
            <View style={Styles.countContainer}>
                <Text style={Styles.count}>{count}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.9}
                style={Styles.container}>
                <Image source={imageSource} style={Styles.image}></Image>
            </TouchableOpacity>
            <Text style={Styles.title}>{title}</Text>
        </View>
    )
}