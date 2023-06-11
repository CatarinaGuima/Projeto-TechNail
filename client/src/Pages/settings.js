import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function SettingsScreen() {
    const settingsData = [
        { id: 1, title: 'Notificações', icon: 'bell' },
        { id: 2, title: 'Conta', icon: 'user' },
        { id: 3, title: 'Pagamentos', icon: 'money' },
        { id: 4, title: 'Histórico de Atendimentos', icon: 'file' }
    ];
    
    const SettingsItem = ({ title, icon }) => (
        <TouchableOpacity onPress={() => console.log(title)} style={styles.itemContainer}>
            <Icon name={icon} size={20} style={styles.icon} />
            <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
    );

            return (
                <View style={styles.container}>
                    <FlatList
                        data={settingsData}
                        renderItem={({ item }) => (
                            <SettingsItem title={item.title} icon={item.icon} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            );
        };

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#FFF0F5',
        paddingHorizontal: 20
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10
    },
    itemContainer: {
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10
    },
    icon: {
        marginRight: 10
    }
});

