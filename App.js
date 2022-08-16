// // In App.js in a new project

// import React from 'react';
// import { View,Button, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>

//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// const App=()=> {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


//...............................................................................................................................






import React ,{useState}from 'react';
import {StyleSheet, View,Dimensions} from 'react-native';
import MapView,{Polyline,Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const App = () => {

  const [coordinates] = useState([
    {
      latitude: 24.9204,
      longitude: 67.1344,
    },
    {
      latitude: 24.8594,
      longitude:67.0488,
    },
  ]);

return(
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude, 
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
export default App;














//............................................................

// import React, {useState, useEffect} from 'react';
// import {StyleSheet, Text} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';


// const App = () => {
//   const [position, setPosition] = useState({
    
//     // latitude: 10,
//     // longitude: 10,
//     // latitudeDelta: 0.001,
//     // longitudeDelta: 0.001,
//   });

//   useEffect(() => {
//     Geolocation.getCurrentPosition((pos) => {
//       const crd = pos.coords;
//       setPosition({
//         latitude: crd.latitude,
//         longitude: crd.longitude,
//         latitudeDelta: 0.0421,
//         longitudeDelta: 0.0421,
//       });
//     }).catch((err) => {
//       console.log(err);
//     });
//   }, []);

//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={position}
//       showsUserLocation={true}
//       showsMyLocationButton={true}
//       followsUserLocation={true}
//       showsCompass={true}
//       scrollEnabled={true}
//       zoomEnabled={true}
//       pitchEnabled={true}
//       rotateEnabled={true}>
//        <Marker
//        title='Yor are here'
   
//        coordinate={position}/>
//        </MapView>
//   );
// };

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default App;
// //...........................................................

