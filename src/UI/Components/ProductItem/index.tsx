import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native'
import { Styles } from './styles'

interface IProduct {
    title: string,
    imageSource: ImageSourcePropType,
    count: number,
}

export const ProductItem: React.FC<IProduct> = (props) => {
    return (
        <View>
            <View style={Styles.countContainer}>
                <Text style={Styles.count}>{props.count}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.9}
                style={Styles.container}>
                <Image source={props.imageSource} style={Styles.image}></Image>
            </TouchableOpacity>
            <Text style={Styles.title}>{props.title}</Text>
        </View>
    )
}