import { View, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { NovosItens } from '../Componentes/NovosItens';
import { AdicionarItem } from '../Componentes/AdicionarItem';
import Axios from 'axios';

export function ReviewsScreen() {

    const [lista, setLista] = useState();

    //READ
    useEffect(() => {
        Axios.get("http://192.168.0.8:3001/comentarios").then((response) =>{
                setLista(response.data)
            }
        )
    }, [lista])

    //CREATE
    const submeterInformacao = (texto) => {
        Axios.post("http://192.168.0.8:3001/comentarios", {comentarios: texto})
    }

    //DELETE
    const deletarComentario = (key) => {
        Axios.delete(`http://192.168.0.8:3001/comentarios/${key}`,)
    }

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <AdicionarItem funcao={submeterInformacao} />
                <View style={styles.estiloLista}>
                    <FlatList
                        data={lista}
                        renderItem={({ item }) => (
                            <NovosItens props={item} funcao={deletarComentario} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFF0F5'
    },
    conteudo: {
        padding: 40,

    },
    estiloLista: {
        marginTop: 30
    }
});
