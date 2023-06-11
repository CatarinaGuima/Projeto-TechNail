import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Image, Text, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

export function ApointmentScreen() {
    const [selected, setSelected] = useState('');
    return (
        <>
            <View style={styles.header}>
                <View style={styles.perfil}>
                    <Image
                        style={styles.image}
                        source={require('../Images/perfil.jpg')} />
                </View>
                <View style={styles.description}>
                    <Text style={styles.name}>Olá</Text>
                    <Text style={styles.type}>Querida Cliente</Text>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity>
                        <Foundation name="list" size={42} color="#E33488" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#FFF0F5' }}>
                <Calendar
                    style={styles.data}
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }} />
                <View style={styles.button}>
                    <Button style={{ width: 50 }}
                        title='Confirmar o agendamento'
                        color='#E33488'
                        onPress={() => Alert.alert('Obrigada! Agendamento confirmado :D')}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    data: {
        paddingTop: 60,
        marginBottom: 50,
        borderWidth: 1,
        borderColor: 'gray',
        height: 450,
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#E33488',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#E33488',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
    },
    button: {
        marginLeft: 80,
        width: 250,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#d8bfd8'
    },
    perfil: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    description: {
        marginTop: 100,
        marginLeft: -40,
    },
    image: {
        display: 'flex',
        marginTop: 50,
        borderRadius: 125 / 2,
        alignItems: 'flex-start',
        width: 125,
        height: 125,
        borderWidth: 5,
        borderColor: '#E6E6FA',
    },
    name: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        left: 70,
    },
    type: {
        fontSize: 16,
        justifyContent: 'center',
        left: 70,
    },
    icon: {
        justifyContent: 'flex-end',
        left: 120,
        paddingBottom: 65
    }
});


