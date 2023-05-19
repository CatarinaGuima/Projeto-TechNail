import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';

export function HomeScreen() {

  const [lista, setLista] = useState([
    { id: 1, uri: 'https://cdn-icons-png.flaticon.com/512/3789/3789889.png', name: 'Nails' },
    { id: 2, uri: 'https://cdn-icons-png.flaticon.com/512/942/942759.png', name: 'Appointment' },
    { id: 3, uri: 'https://cdn-icons-png.flaticon.com/512/1375/1375106.png', name: 'Gallery' },
    { id: 4, uri: 'https://cdn-icons-png.flaticon.com/512/2225/2225218.png', name: 'Prices' },
    { id: 5, uri: 'https://cdn-icons-png.flaticon.com/512/2830/2830514.png', name: 'Employees' },
    { id: 6, uri: 'https://cdn1.iconfinder.com/data/icons/creative-process-14/512/Review-512.png', name: 'Reviews' },
  ])

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(lista);
  const [change, setChange] = useState('Register');
  const clicarBotao = () => {
    setChange('Registered');
  }

  useEffect(() => {
    if (searchText === '') {
      setList(lista);
    } else {
      setList(
        list.filter(
          (i) => i.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);


  function HeaderComponent() {
    return (
      <>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.category}>Select your category</Text>
        <View style={styles.look}>
          <View>
            <Entypo name="magnifying-glass" size={28} color="black" />
          </View>
          <View>
            <TextInput
              style={styles.search}
              placeholder=' Buscar...'
              value={searchText}
              onChangeText={(t) => setSearchText(t)}
            >
            </TextInput>
          </View>
        </View>
      </>
    )
  }

  function FooterComponent() {
    return (
      <>
        <View style={styles.button}>
          <Button
            title={change}
            color='#8AEAE5'
            onPress={clicarBotao}
          />
          <View style={styles.login}></View>
          <Button
            title='Login'
            color='#E33488'
            onPress={() => Alert.alert('Login complete!')} />
          <Text style={styles.legend}>Or login with Social Media</Text>
        </View>
      </>
    )
  }

  function ItemComponent({ item }) {
    return (
      <>
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

      </>
    )
  }

  return (
    <><View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={list}
        ListHeaderComponent={HeaderComponent}
        renderItem={ItemComponent}
        ListFooterComponent={FooterComponent} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  hello: {
    marginTop: 2,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
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
    marginLeft: 5,
    borderRadius: 100 / 6,
    marginBottom: 20,
    borderWidth: 1,
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 100,
    width: 200,
  },
  login: {
    marginTop: 20,
  },
  legend: {
    color: '#C0C0C0',
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  icons: {
    flexDirection: 'column',
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
  icon: {
    height: 70,
    width: 70,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  flatlist: {
    flex: 1,
    marginTop: 20,
  },
});
