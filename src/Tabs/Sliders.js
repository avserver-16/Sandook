import { ScrollView, View, Text, TouchableOpacity } from "react-native";

export default function Sliders() {
    return (<View
        style={{
        height: 250, backgroundColor: 'transparent',
            top:0, zIndex: 20,marginRight:0,width:'100%'
        }}>
        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            padding: 16,
            backgroundColor: 'transparent',
            
        }}>
            <View style={{ flexDirection: 'row' ,marginLeft:-35,height:150}}>{['Gaming', 'Education', 'Web Development'].map((item, index) => (
                <View key={index} style={{ height:150,width:180, backgroundColor: 'rgba(186, 186, 186,0.1)',borderRadius:25,justifyContent:'center',alignItems:'center',margin:20,padding:16}}><Text 
                style={{fontFamily:'codelight',fontSize:20,alignSelf:'center',color:'#eafffc'}}>{item}</Text></View>
            ))}
            <TouchableOpacity><View style={{ height:150,width:180, backgroundColor: 'rgba(186, 186, 186,0.1)',borderRadius:25,
            justifyContent:'center',alignItems:'center',margin:20,paddingLeft:50}}><Text 
                style={{fontFamily:'codelight',fontSize:20,color:'#eafffc'}}>+ Add Category</Text></View></TouchableOpacity>
            </View>
        </ScrollView>
    </View>)
}