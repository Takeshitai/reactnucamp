// import { useState } from 'react';
// import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';
import { View, Platform } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator
      initialRouteName='Directory'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#563700'
        },
        headerTintColot: '#fff'
      }}
    >
      <Stack.Screen 
        name='Directory' 
        component={DirectoryScreen} 
        options={{title:'Campsite Directory'}} 
      />
      <Stack.Screen 
        name='CampsiteInfo' 
        component={CampsiteInfoScreen} 
        options={({route}) => ({
          title:route.params.campsite.name
        })} 
      />
    </Stack.Navigator>
  )
}

const Main = () => {
  // const [campsites, setCampsites] = useState(CAMPSITES);
  // const [selectedCampsiteId, setSelectedCampsiteId] = useState();

  return (
    <View style={{ 
      flex: 1,
      paddingTop:
      Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
      }}>
      <DirectoryNavigator />
    </View>
  );
};

export default Main;