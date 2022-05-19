import React from "react";
import { Text, View, FlatList } from "react-native";

import styles from "./styles";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Conta de Luz",
    value: "456,10",
    date: "17/05/2022",
    type: "expense"
  },
  {
    id: 2,
    label: "Conta de Água",
    value: "456,10",
    date: "17/05/2022",
    type: "expense"
  },
  {
    id: 3,
    label: "Salário",
    value: "1.560,10",
    date: "17/05/2022",
    type: "balance"
  },
  {
    id: 4,
    label: "PLR",
    value: "260,10",
    date: "17/05/2022",
    type: "balance"
  },
];

export default function Home() {
  return (
    <View style={styles.container}>

      <Header />

      <Balance balance="9.250,00" expenses="-345,00" />
      
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        data={list} 
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

    </View>
  );
}
