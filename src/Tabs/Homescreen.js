import { useState } from "react";
import { TouchableOpacity, View, Text, ImageBackground, TextInput, ScrollView } from "react-native"
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from "@react-navigation/native";
import Sliders from "./Sliders";


const Homescreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState('Avish');
    return (<View style={{ height: '100%', width: '100%', backgroundColor: '#000', padding: 16 }}>
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={{
                height: 600,
                width: '110%',
                alignSelf: 'center',
                top: 0,
                zIndex: 1,
                position: 'absolute'
            }}></ImageBackground>
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={{
                height: 600,
                width: '110%',
                alignSelf: 'center',
                top: 0,
                zIndex: 1,
                position: 'absolute'
            }}></ImageBackground>
        <TouchableOpacity style={{
            height: 60, width: 60, backgroundColor: '#2BFFFF', top: 60,
            borderRadius: 50, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', zIndex: 20
        }} onPress={() => { navigation.navigate('Profile') }}>
            <MaterialIcons name="account-circle" color={'#033e49'} size={60} />
        </TouchableOpacity>
        <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 35, top: 5 }}>Hey,{user}!</Text>

        <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 40, top: 70, width: '110%', alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 10 }}>https://</Text>Sandook<Text style={{ fontSize: 10 }}>  your Digital Bookmark.</Text></Text>
        <TextInput style={{
            width: '100%',
            height: 60,
            backgroundColor: 'rgba(186, 186, 186,0.1)',
            zIndex: 20,
            top: 110,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#2BFFFF',
            paddingLeft: 60,
            fontFamily: 'codelight',
            color: '#2BFFFF',
            fontSize: 20,
        }}
            placeholder="AI Link Search..." placeholderTextColor={'#0d717d'}></TextInput>
        <MaterialIcons name="magnify" color={'#0d717d'} size={30} style={{ left: 16, top: 65, zIndex: 20 }}></MaterialIcons>
        <ImageBackground
            source={require('../assets/AIlogo.png')}
            style={{
                height: 40,
                width: 40,
                alignSelf: 'flex-end',
                top: 310,
                zIndex: 1,
                position: 'absolute',
                right: 40
            }}></ImageBackground>
        <View style={{ zIndex: 25, top: 100, height: 500, borderRadius: 0 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    height: 1000, zIndex: 20, width: '100%', backgroundColor: 'transparent', borderRadius: 25

                }}>
                <ImageBackground
                    source={require('../assets/hero.png')}
                    style={{
                        height: 200,
                        width: 200,
                        alignSelf: 'flex-start',
                        top: 0,
                        zIndex: 1,
                        right: 0,
                        //marginBottom: 50
                    }}></ImageBackground>
                <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 16, top: -150, width: 180, left: 190 }}>Your Goldfish memory needs a Sandook to store your websites</Text>
                <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 20, top: -50 }}>Categories</Text>
                <Sliders />
                <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 20, top: -60, marginBottom: 10 }}>Recently Added</Text>
                <View style={{ top: -50 }}>{['https://xyz.com', 'https://abcddd.com', 'https://696969.com'].map((item, index) => (
                    <TouchableOpacity key={index} style={{
                        backgroundColor: 'transparent',
                        margin: 5,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 10,
                        alignSelf: 'flex-start',
                        left: -10
                    }}>
                        < Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 16, alignSelf: 'flex-start', marginBottom: 0 }}>{item}</Text>
                    </TouchableOpacity>
                ))}</View>
                <TouchableOpacity style={{width:'100%',height:60,alignSelf:'center',backgroundColor:'#2BFFFF',justifyContent:'center',alignItems:'center',borderRadius:100}}>
                    < Text style={{ color: '#033e49', fontFamily: 'coderegular', fontSize: 20, marginBottom: 0 }}>Upload a Screenshot</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View >)
}

export default Homescreen;