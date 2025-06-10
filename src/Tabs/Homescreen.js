import { useState } from "react";
import { TouchableOpacity, View, Text, ImageBackground } from "react-native"
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from "@react-navigation/native";


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
                zIndex: 10,
                position: 'absolute'
            }}></ImageBackground>
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={{
                height: 600,
                width: '110%',
                alignSelf: 'center',
                top: 0,
                zIndex: 10,
                position: 'absolute'
            }}></ImageBackground>
        <TouchableOpacity style={{
            height: 60, width: 60, backgroundColor: '#2BFFFF', top: 60,
            borderRadius: 50, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center'
        }} onPress={() => { navigation.navigate('Profile') }}>
            <MaterialIcons name="account-circle" color={'black'} size={60} />
        </TouchableOpacity>
        <Text style={{ color: '#eafffc', fontFamily: 'coderegular', fontSize: 35, top: 5 }}>Hey,{user}!</Text>

        <Text style={{ color: '#eafffc', fontFamily: 'codelight', fontSize: 40, top: 70 ,width:'110%',alignSelf:'flex-start'}}>
            <Text style={{fontSize:10}}>https://</Text>Sandook<Text style={{fontSize:10}}>  your Digital Bookmark.</Text></Text>
          <Text style={{ color: '#033e49', fontFamily: 'coderegular', fontSize: 20, top: 150 }}>Categories</Text>
          <Text style={{ color: '#033e49', fontFamily: 'coderegular', fontSize: 20, top: 350 }}>Favourites</Text>
    </View>)
}

export default Homescreen;