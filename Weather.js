import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native"; 
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"; 
import { LinearGradient } from 'expo-linear-gradient';


export default function Weather({temp}) {
    return (
                <LinearGradient 
                 colors={['#4c669f','#3b5998','#192f6a']}
                 style={styles.container}>
                 <StatusBar barStyle="light-content"/>
                    <View style={styles.top}>
                        <MaterialCommunityIcons name="weather-lightning-rainy" size={150} color="white"/>
                        <Text style={styles.temp}>{Math.round(temp)}o</Text>
                    </View>
                    <View style={styles.bottom}>
                    </View>
                </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere", 
        "Clear", 
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        width:"100%",
        justifyContent: "center", 
        alignItems: "center",
        padding:15,
        alignItems: "center", 
        borderRadius:16
    },
    top: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        flex : 1, 
        justifyContent: "center",
        alignItems: "center" 
    },
    temp: {
     fontSize: 36,
     color:"white"
    }
}); 