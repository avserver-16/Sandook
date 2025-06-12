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
        <View style={{ zIndex: 25, top: 100, height: 500, borderRadius: 0 }}><ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                height: 2000, zIndex: 20, width: '100%', backgroundColor: 'transparent', borderRadius: 25

            }}>
            <Text style={{ color: '#033e49', fontFamily: 'coderegular', fontSize: 20, top: 0 }}>Categories</Text>
            <Sliders />
            <Text style={{ color: '#033e49', fontFamily: 'coderegular', fontSize: 20, top: 10 }}>Favourites</Text>
            <Sliders />
        </ScrollView>
        </View>
    </View>)
}

export default Homescreen;