import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native"; 
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"; 
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze : {
        iconName : "weather-hazy",
        gradient : [ "#bdc3c7", "#2c3e50"],
        title : "",
        softTitle: ""
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : [ "#f7971e", "#ffd200"],
        title : "",
        softTitle: ""
    },
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ["#3c3b3f","#605c3c"],
        title : "왁 천둥번개다!!",
        softTitle: "빨래걷자~!!"
    },
    Drizzle : {
        iconName : "weather-partly-rainy",
        gradient : ["#373b44","#4286f4"],
        title : "",
        softTitle: ""
    },
    Rain : {
        iconName : "weather-pouring",
        gradient : ["#0f0c29","#302b63","#24243e"],
        title : "",
        softTitle: ""
    },
    Snow : {
        iconName : "weather-snowy-heavy",
        gradient : ["#bdc3c7","#2c3e50"],
        title : "",
        softTitle: "" 
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#5d4157","#a8caba"],
        title : "",
        softTitle: ""
    },
    Default : {
        iconName : "weather-sunset",
        gradient : ["#fc4a1a","#f7b733"],
        title : "",
        softTitle: ""
    }
}

export default function Weather({temp, condition}) {


    condition = "Thunderstorm";
    const weather = weatherOptions[condition] 
                  ? weatherOptions[condition] 
                  : weatherOptions['Default'];

    return (
                <LinearGradient 
                 colors={weather.gradient}
                 style={styles.container}>
                 <StatusBar barStyle="light-content"/>
                    <View style={styles.top}>
                        <MaterialCommunityIcons 
                          name={weather.iconName}
                          size={150} 
                          color="white"
                         />
                        <Text style={styles.temp}>{Math.round(temp)}°</Text>
                    </View>
                    <View style={{...styles.bottom, ...styles.textContainer}}>
                        <Text style={styles.title}>{weather.title}</Text>
                        <Text style={styles.softTitle}>{weather.softTitle}</Text>
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
        "Clouds",
        "Haze"
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
    },
    title : {
        color : "#fff",
        fontSize : 54,
        fontWeight: "300",
        marginBottom: 10
    },
    softTitle : {
        color : "#fff",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer : {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
}); 