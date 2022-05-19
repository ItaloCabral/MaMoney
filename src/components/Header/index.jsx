import React from "react";
import {
  Text, View, TouchableOpacity
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";

import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>

      <MotiView style={styles.content}
        from={{ opacity: 0, translateY: -150 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 0.8, delay: 0.3 }}
        >

        <MotiText style={styles.username}
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.8 }}
          >
          Italo Bruno
        </MotiText>

        <TouchableOpacity activeOpacity={.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
        
      </MotiView>
    </View>
  );
}
