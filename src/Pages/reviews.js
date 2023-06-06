import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import { NovosItens } from '../Componentes/NovosItens';
import { AdicionarItem } from '../Componentes/AdicionarItem';

export function ReviewsScreen() {

    const [lista, setLista] = useState([
        { texto: "comprar café", key: 1 },
        { texto: "criar um app", key: 2 },
        { texto: "jogar video game", key: 3 },

    ]);

    const submeterInformacao = (texto) => {
        setLista((prevLista) => {
            return [
                { texto: texto, key: Math.random().toString() },
                ...prevLista
            ];
        })
    }

    const apertarItem = (key) => {
        setLista(
            (prevLista) => {
                return prevLista.filter(texto => texto.key != key);
            }
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <AdicionarItem funcao={submeterInformacao} />
                <View style={styles.estiloLista}>
                    <FlatList
                        data={lista}
                        renderItem={({ item }) => (
                            <NovosItens props={item} funcao={apertarItem} />
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
    },
    conteudo: {
        padding: 40,

    },
    estiloLista: {
        marginTop: 30
    }
});
