import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';

export function HomeScreen() {

  const [lista, setLista] = useState([
    { id: 1, uri: 'https://cdn-icons-png.flaticon.com/512/3789/3789889.png', name: 'Nails' },
    { id: 2, uri: 'https://cdn-icons-png.flaticon.com/512/1375/1375106.png', name: 'Gallery' },
    { id: 3, uri: 'https://cdn-icons-png.flaticon.com/512/2225/2225218.png', name: 'Prices' },
    { id: 4, uri: 'https://cdn-icons-png.flaticon.com/512/2830/2830514.png', name: 'Employees' },
    { id: 5, uri: 'https://cdn1.iconfinder.com/data/icons/creative-process-14/512/Review-512.png', name: 'Reviews' },
    { id: 6, uri: 'https://cdn-icons-png.flaticon.com/512/4508/4508018.png', name: 'Talk to us' },
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
      <View style={styles.top}>
        <Image
          source={require('../Images/logo.png')}
          style={styles.image} />
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.category}>Select your category</Text>
        <View style={styles.look}>
          <View style={styles.lupa}>
            <Entypo name="magnifying-glass" size={30} color="black" />
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
      </View>
    )
  }

  function FooterComponent() {
    return (
      <View style={styles.button}>
        <Button
          title={change}
          color='#E33488'
          onPress={clicarBotao}
        />
      </View>
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
  top: {
    flex: 1
  },
  image: {
    marginBottom: -70,
    width: '100%',
    height: 200,
  },
  hello: {
    marginTop: 2,
    color: '#4F4F4F',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    fontSize: 18,
    color: '#4F4F4F',
    textAlign: 'center',
  },
  look: {
    width: '100%',
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 150,
    flexDirection: 'row',
  },
  lupa: {
    marginTop: 5,
    marginRight: 2
  },
  search: {
    backgroundColor: 'white',
    width: 200,
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
    marginLeft: 5,
    marginRight: 5,

  },
  flatlist: {
    flex: 1,
    marginTop: 1,
  },
});
