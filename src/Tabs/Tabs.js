import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import Homescreen from './Homescreen';
import Favourites from './Favourites';
import Profile from './Profile';
import { Button } from 'react-native-paper';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Homescreen"
            activeColor="yellow"
            inactiveColor="#3e2465"
            //barStyle={{ paddingBottom: 48 }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 30,
                    width: '80%',
                    marginHorizontal: '10%',
                    //elevation: 5,
                    backgroundColor: '#2BFFFF',
                    borderRadius: 60,
                    height: 60,
                    padding: 10,
                    borderTopWidth: 0
                },
                tabBarShowLabel: false,
            }

            }
        >
            <Tab.Screen name="Homescreen" component={Homescreen} options={{
                tabBarIcon: () => (
                    <MaterialIcons name="home" color={'#033e49'} size={30} style={{ top: 10 }} />
                ),
            }} />
            <Tab.Screen name="Favourites" component={Favourites}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="heart" color={'#033e49'} size={30} style={{ top: 10 }} />
                    ),
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="account" color={'#033e49'} size={30} style={{ top: 10 }} />
                    ),
                }} />
        </Tab.Navigator >
    );
}

export default BottomTabs;