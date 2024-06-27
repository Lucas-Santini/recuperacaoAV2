import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import { create } from './Criar.js';

export function AtualizarPeso() {
    const [data, setData] = useState('');
    const [peso, setPeso] = useState('');

    const atualizarPeso = async () => {
        try {
            db = await create();
            let result = await db.runAsync(`UPDATE pesos SET peso = ? WHERE data = ?;`, peso, data);
            if (result.changes > 0) {
                Alert.alert('Sucesso', `Peso atualizado para ${peso} kg na data ${data}`, [{ text: 'Ok' }], { cancelable: false });
                setPeso('');
                setData('');
            } else {
                Alert.alert('Erro', 'Erro atualizando peso', [{ text: 'Ok' }], { cancelable: false });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Data do peso a ser atualizado"
                value={data}
                onChangeText={data => setData(data)}
                style={styles.input}
            />
            <TextInput
                placeholder="Novo peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={peso => setPeso(peso)}
                style={styles.input}
            />
            <Button title="Atualizar Peso" onPress={() => atualizarPeso()} color="#ff9800" />
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
