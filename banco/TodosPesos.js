import React, { useState } from 'react';
import { Alert, Button, FlatList, Text, View, StyleSheet } from 'react-native';
import { create } from './Criar.js';

export function TodosPesos(){
    let [itensLista, setItensLista] = useState([]);

    const obterTodosPesos = async () => {
        try{
             db = await create();
             let todasLinhas = await db.getAllAsync('select * from pesos;');
             setItensLista(todasLinhas);
             console.log("[LOG] Dados recuperados da tabela pesos");
             if(todasLinhas.length == 0){
                 Alert.alert('Alerta', 'Nenhum peso salvo', [{ text: 'Ok' }], { cancelable: false });
             }
         } catch (error) {
             console.log(error);
         }
     }

    let visualizarItemLista = (item) => {
        return (
            <View key={item.id} style={styles.itemLista}>
                <Text style={styles.textoCabecalho}>Data</Text>
                <Text style={styles.textoConteudo}>{item.data}</Text>
                <Text style={styles.textoCabecalho}>Peso</Text>
                <Text style={styles.textoConteudo}>{item.peso}</Text>  
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Button title="Listar todos Pesos" onPress={() => obterTodosPesos()} color="#3f51b5" />
            <FlatList
                style={styles.lista}
                data={itensLista}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => visualizarItemLista(item)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        alignItems: 'center',
        marginTop: 20,
        
    },
    lista: {
        marginTop: 20,
        width: '100%',
      
    },
    itemLista: {
        backgroundColor: '#f5f5f5', // cinza claro
        marginTop: 10,
        padding: 20,
        borderRadius: 10,
        width: '100%',
        marginBottom: 20,
    },
    textoCabecalho: {
        color: '#333333',
        fontSize: 16,
        fontWeight: '700',
    },
    textoConteudo: {
        color: '#333333',
        fontSize: 18,
    },
});
