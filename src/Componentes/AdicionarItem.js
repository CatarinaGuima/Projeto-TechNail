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
                placeholder='Digite sua mensagem aqui...'
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
        justifyContent: 'space-between',
    },
    input: {
        height: 60,
        backgroundColor: '#FFF',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 10,
        width: '88%',
        marginRight: 25
    },
    button: {
        marginTop: 10,
        backgroundColor: '#FF1493',
        width: '12%',
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5
    }
})