import React from "react"
import {
  View, Text, ScrollView, TouchableOpacity
} from "react-native"

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}
