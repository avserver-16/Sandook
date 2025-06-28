import { View, ImageBackground } from "react-native"

export default function VisitLater () {
  return (<View style={{ height: '100%', width: '100%', backgroundColor: '#000' }}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{
        height: 600,
        width: '110%',
        alignSelf: 'center',
        top: 0,
        zIndex: 10,
        position: 'absolute',
     
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
  </View>)
}