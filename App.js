import React from 'react';
import Loading from "./Loading"; 
import * as Location from "expo-location";
import axios from 'axios';
import { Alert } from "react-native";
import Weather from "./Weather";  // { } 차이점 확인  

const API_KEY = "4df6dacf98db93283d3640aa6a37a7c2";

export default class extends React.Component {

  state = { 
    isLoading: true, 
    condition: "Clear",
    temp: 0
  }

  getWeather = async(lat, lon) => {
    const { data: {main : {temp}, weather}  } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    this.setState({ isLoading:false, condition: weather[0].main, temp  });
  }
 
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync(); 
      //console.log(response);
      const location = await Location.getCurrentPositionAsync(); 
      //console.log(location);
      const {coords} = location;  
      //console.log(coords.latitude, coords.longitude); 
      
      this.getWeather(coords.latitude, coords.longitude); 
      //this.setState({isLoading: false}); 

    } catch(error) {
      Alert.alert("Can't find you.", "So Sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state; 
    return isLoading ? <Loading/> : <Weather temp={temp} condition={condition}/>;
  }
}
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return <Loading/>;
//   //return <Loading/>;
//   // return (
//   //   <View style={styles.container}>
//   //     <View style={styles.yellowView}>
//   //     </View>
//   //     <View style={styles.blueView}>
//   //     </View>
//   //     <StatusBar style="auto" />
//   //   </View>
//   // );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //flexDirection: "row",
//     //기본값을 Column reverse
//     backgroundColor: '#fff',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   text: {
//     color : "black",
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow"
//   }, 
//   blueView: {
//     flex: 1,
//     backgroundColor: "blue"
//   }
// });
