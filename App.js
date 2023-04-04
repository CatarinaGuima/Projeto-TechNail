import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button, ScrollView, TextInput, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function App() {

  const [lista, setLista] = useState([
    { uri: 'https://cdn-icons-png.flaticon.com/512/3789/3789889.png', name: 'Nails' },
    { uri: 'https://cdn-icons-png.flaticon.com/512/942/942759.png', name: 'Appointment' },
    { uri: 'https://cdn-icons-png.flaticon.com/512/1375/1375106.png', name: 'Gallery' },
    { uri: 'https://cdn-icons-png.flaticon.com/512/2225/2225218.png', name: 'Prices' },
    { uri: 'https://cdn-icons-png.flaticon.com/512/2830/2830514.png', name: 'Employees' },
    { uri: 'https://cdn1.iconfinder.com/data/icons/creative-process-14/512/Review-512.png', name: 'Reviews' },
  ])

  const [change, setChange] = useState('Register')

  const clicarBotao = () => {
    setChange('Registered');
  }

  return (

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/Images/logo2.png')}
        ></Image>
      </View>
      <Text style={styles.hello}>Hello,</Text>
      <Text style={styles.category}>Select your category</Text>
      <View style={styles.look}>
        <Entypo name="magnifying-glass" size={28} color="black" />
        <TextInput style={styles.search} placeholder='Buscar...'></TextInput>
      </View>
      <FlatList
        style={styles.flatlist}
        numColumns={3}
        keyExtractor={(item) => item.number}
        data={lista}
        renderItem={({ item }) => (
          <View style={styles.icons}>
            <TouchableOpacity>
              <View style={styles.item}>
                <Image
                  style={styles.icon}
                  source={{ uri: item.uri }} />
              </View>
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.button}>
        <Button
          title={change}
          color='#8AEAE5'
          style={styles.register}
          onPress={clicarBotao}
        />
        <Text></Text>
        <Button
          title='Login'
          color='#E33488'
          style={styles.login}
          onPress={() => Alert.alert('Login complete!')} />
        <Text style={styles.legend}>Or login with Social Media</Text>
        <StatusBar style="auto" /></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',

  },
  flatlist: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    marginTop: 40,
    width: 410,
    height: 180,
  },
  hello: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
  },
  item: {
    margin: 20,
    marginTop: 30,
    padding: 10,
    height: 86,
    borderWidth: 2,
    borderColor: '#FF1493',
    borderRadius: 100 / 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
  },
  icons: {
    flexDirection: 'column',
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 100,
    width: 200,

  },
  register: {
    marginBottom: 80,
  },
  login: {
    marginTop: 40,
  },
  legend: {
    color: '#C0C0C0',
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  icon: {
    height: 70,
    width: 70,
  },
  look: {
    marginTop: 40,
    marginLeft: 180,
    flexDirection: 'row',
  },
  search: {
    backgroundColor: 'white',
    width: 180,
    height: 38,
    borderRadius: 100 / 6,
    marginLeft: 5,
  },
});
