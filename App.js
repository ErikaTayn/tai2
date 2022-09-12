import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {css} from './assets/css/css';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={css.container}>
      <MapView 
      style={css.map}
  initialRegion={{
  latitude:-26.863783090751674, 
  longitude:-52.39695777037937,
  latitudeDelta:0.00922,
  longitudeDelta:0.00421,
  
}}
>
      </MapView>
  
    <View style={css.search}>

    </View>
    </View>
  );
}

