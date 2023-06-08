import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import { NovosItens } from '../Componentes/NovosItens';
import { AdicionarItem } from '../Componentes/AdicionarItem';

export function ReviewsScreen() {

    const [lista, setLista] = useState([
        {key: 1, texto: "Amei o atendimento!!!" },
        {key: 2, texto: "Melhores profisionais 💗" },
        {key: 3, texto: "Muito satisfeita." },

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
        backgroundColor: '#FFF0F5'
    },
    conteudo: {
        padding: 40,

    },
    estiloLista: {
        marginTop: 30
    }
});
