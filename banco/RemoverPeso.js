import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import { create } from './Criar.js';

export function RemoverPeso() {
    const [data, setData] = useState('');

    const removerPeso = async () => {
        try {
            db = await create();
            let result = await db.runAsync(`DELETE FROM pesos WHERE data = ?;`, data);
            if (result.changes > 0) {
                Alert.alert('Sucesso', 'Peso removido com sucesso', [{ text: 'Ok' }], { cancelable: false });
                setData('');
            } else {
                Alert.alert('Erro', 'Erro removendo peso', [{ text: 'Ok' }], { cancelable: false });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Data do peso a ser removido"
                value={data}
                onChangeText={data => setData(data)}
                style={styles.input}
            />
            <Button title="Remover Peso" onPress={() => removerPeso()} color="#f44336" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '80%',
    },
    input: {
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
