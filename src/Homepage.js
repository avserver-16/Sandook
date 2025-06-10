import { Text, TouchableOpacity, View, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"

export default Homaepage = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={['#000000', '#2BFFFF', '#2BFFFF']}
            start={{ x: 0, y: 0.3 }}
            end={{ x: 0, y: 2 }}
            style={{ flex: 1 }}>
            <View style={{ height: '100%', width: '100%', padding: 16 }}>
                <Text style={{ color: '#eafffc', fontFamily: 'sfregular', fontSize: 50, alignSelf: 'center', top: 100 }}>
                    Sandook
                </Text>
                <Text style={{ color: '#ababab', fontFamily: 'sfregular', fontSize: 18, alignSelf: 'center', top: 120,height:50 }}>
                    Aapka, " Digital Bookmark "
                </Text>
                <ImageBackground
                    source={require('../assets/Sandook.png')}
                    style={{
                        height: 200,
                        width: 200,
                        alignSelf: 'center',
                        top: 410,
                        zIndex: 10
                    }}></ImageBackground>
                <TouchableOpacity style={{
                    width: '80%', height: 60, backgroundColor: '#000', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 30,
                    top: 390, borderWidth: 1, borderColor: '#eafffc'
                }}
                    onPress={() => { navigation.navigate('BottomTabs') }}>
                    <ImageBackground
                        source={require('../assets/Google.png')}
                        style={{
                            height: 25,
                            width: 25,
                            alignSelf: 'flex-start',
                            top: 15,
                            left: 25
                        }}></ImageBackground>
                    <Text style={{ color: '#eafffc', fontFamily: 'sfregular', fontSize: 18, alignSelf: 'center', top: -15, left: 20 }}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: '#2b2b2b', fontFamily: 'sfregular', fontSize: 14, alignSelf: 'center', top: 420}}>
                    @ Terms and Conditions
                </Text>
            </View>
        </LinearGradient>)
}