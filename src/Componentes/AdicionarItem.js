import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function AdicionarItem({ funcao }) {
    const [texto, setTexto] = useState('');

    const pegarMudanca = (val) => {
        setTexto(val)
    }

    return (
        <View style={styles.search}>
            <TextInput
                style={styles.input}
                placeholder='Adicionar uma tarefa...'
                onChangeText={pegarMudanca}
                autoCorrect={true}
            />
            <TouchableOpacity
                onPress={() => funcao(texto)}
                style={styles.button}
            >
                <Ionicons name="md-add" size={38} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#FFF8EE',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 10,
        width: '88%',
        marginRight: 25
    },
    button: {
        backgroundColor: 'lightblue',
        width: '12%',
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5
    }
})