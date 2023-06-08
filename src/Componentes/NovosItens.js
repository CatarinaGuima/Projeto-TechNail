import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export function NovosItens({ props, funcao }) {
    return (
        <TouchableOpacity onPress={() => funcao(props.key)}>
            <View style={styles.postagem}>
                <MaterialIcons name='delete' size={22} color={'lightpink'} />
                <Text style={styles.texto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postagem: {
        width: '100%',
        alignSelf: 'flex-start',
        backgroundColor: '#FFF',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    texto: {
        marginLeft: 50,
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    }
})