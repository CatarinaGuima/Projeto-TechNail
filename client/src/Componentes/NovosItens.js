import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function NovosItens({ props, funcao }) {
    return (
        <TouchableOpacity onPress={() => funcao(props.id)}>
            <View style={styles.postagem}>
                <MaterialIcons name='delete' size={22} color={'lightpink'} />
                <Text style={styles.texto}>{props.comentarios}</Text>
                <Image
                        style={styles.image}
                        source={require('../Images/perfil.jpg')} />
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
        width: '60%',
        marginLeft: 20,
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    }, 
    image: {
        display: 'flex',
        borderRadius: 30,
        alignItems: 'flex-end',
        marginLeft: 20,
        width: '18%',
        height: 60,
        borderWidth: 5,
        borderColor: '#E6E6FA',
    },
})