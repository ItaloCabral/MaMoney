import React, { useState } from "react";
import {
  Text, View, TouchableOpacity
} from "react-native";

import { MotiView, MotiText, AnimatePresence } from "moti";

import styles from "./styles";

export default function Movements({ data }) {

  const [show, setShow] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {
          show
            ? (
              <AnimatePresence exitBeforeEnter>
                <MotiText style={styles[data.type]}
                  from={{ translateX: 100 }}
                  animate={{ translateX: 0 }}
                  transition={{ type: "timing", duration: 0.5 }}
                >
                  R$ {data.type == "expense" ? "-" : ""}{data.value}
                </MotiText>
              </AnimatePresence>
              )
            : (
                <AnimatePresence exitBeforeEnter>
                  <MotiView style={styles.placeHolder}
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "timing", duration: 0.5 }}
                  >
                  </MotiView>
                </AnimatePresence>
              )
        }
      </View>

    </TouchableOpacity>
  );
}
