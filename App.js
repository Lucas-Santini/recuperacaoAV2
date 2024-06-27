import React from 'react';
import { StyleSheet, View } from 'react-native';
import { InserirPeso } from './banco/InserirPeso';
import { TodosPesos } from './banco/TodosPesos';
import { RemoverPeso } from './banco/RemoverPeso';
import { AtualizarPeso } from './banco/AtualizarPeso';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TodosPesos />
      </View>
      <View style={styles.content}>
        <InserirPeso />
        <AtualizarPeso />
        <RemoverPeso />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // fundo branco
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  content: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
