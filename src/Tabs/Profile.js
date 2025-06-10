import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"
import { Text, View, ImageBackground } from "react-native"

export default Profile = () => {
    const navigation=useNavigation();
    return (<View style={{ height: '100%', width: '100%', backgroundColor: '#000', padding: 16 }}>
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={{
                height: 400,
                width: '110%',
                alignSelf: 'center',
                top: 0,
                zIndex: 10,
                position: 'absolute'
            }}></ImageBackground>
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={{
                height: 1400,
                width: '110%',
                alignSelf: 'center',
                top: 0,
                zIndex: 10,
                position: 'absolute'
            }}></ImageBackground>
        <TouchableOpacity onPress={()=>navigation.navigate('Homepage')}>
            <View style={{
                height: 60, width: 130, backgroundColor: '#2bffff', borderRadius: 100, alignSelf: 'flex-end',
                top: 40, right: 10, justifyContent: 'center', alignItems: 'center',
            }}>
                <Text style={{ fontFamily: 'coderegular', fontSize: 18 }}>Sign Out</Text>
            </View></TouchableOpacity>
        <View style={{
            height: 500, width: '90%', backgroundColor: 'rgba(186, 186, 186,0.1)', alignItems: 'center',
            alignSelf: 'center', top: 100, borderRadius: 25, zIndex: 20
        }}>
            <View style={{ height: 150, width: 150, backgroundColor: '#eafffc', top: 50, borderRadius: 100 }}></View>
            <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 40, top: 80, }}>
                Avish
            </Text>
            <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 15, top: 70, }}>
                avish2025@gmail.com
            </Text>
            <View style={{ flexDirection: 'row', top: 50 }}>
                <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 15, top: 70, marginRight: 30 }}>
                    Highly visited
                </Text>
                <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 15, top: 70, }}>
                    Link wallet
                </Text>
            </View>
            <View style={{ flexDirection: 'row', top: 10, width: '100%', padding: 40 }}>
                <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 12, top: 70, alignSelf: 'flex-start' }}>
                    www.avserver.com
                </Text>
                <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 12, top: 70, marginLeft: 80 }}>
                    20
                </Text>
            </View>
            <View style={{ flexDirection: 'row', top: 10 }}>
                <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 15, top: 70, marginRight: 70, left: -10 }}>
                    Digital Health
                </Text>
                <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 15, top: 70, left: -20 }}>
                    Rank
                </Text>
            </View>
            <View style={{ flexDirection: 'row', top: -80, width: '100%', padding: 90 }}>
                <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 12, top: 70, alignSelf: 'flex-start' }}>
                    88%
                </Text>
                <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 12, top: 70, marginLeft: 120 }}>
                    20
                </Text>
            </View>
        </View>

    </View>)
}