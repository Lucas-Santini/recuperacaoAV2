import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native';
import { create } from './Criar.js';

export function InserirPeso() {
    const [peso, setPeso] = useState('');
    const [data, setData] = useState('');

    const inserirPeso = async () => {
        try {
            db = await create();
            let result = await db.runAsync(`INSERT INTO pesos (peso, data) VALUES (?,?);`, peso, data);
            if (result.changes > 0) {
                Alert.alert('Sucesso', `Peso ${peso} kg na data ${data} foi registrado com sucesso`, [{ text: 'Ok' }], { cancelable: false });
                setPeso('');
                setData('');
            } else {
                Alert.alert('Erro', 'Erro registrando peso', [{ text: 'Ok' }], { cancelable: false });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={peso => setPeso(peso)}
                style={styles.input}
            />
            <TextInput
                placeholder="Data"
                value={data}
                onChangeText={data => setData(data)}
                style={styles.input}
            />
            <Button title="Inserir Peso" onPress={() => inserirPeso()} color="#4caf50" />
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
