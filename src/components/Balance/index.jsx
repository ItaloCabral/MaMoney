import React from "react"
import {
  View, Text
} from "react-native"

import { MotiView } from "moti";

import styles from "./styles";

export default function Balance({ balance, expenses }) {
  return (
    <MotiView style={styles.container}
      from={{ opacity: 0, rotateX: "-100deg" }}
      animate={{ opacity: 1, rotateX: "0deg" }}
      transition={{ type: "timing", duration: 0.8, delay: 0.3 }}
    >

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.expense}>{expenses}</Text>
        </View>
      </View>

    </MotiView>
  )
}
