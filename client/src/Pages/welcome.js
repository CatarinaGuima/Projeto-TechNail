import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export function WelcomeScreen({ navigation }) {

    const image = { uri: 'https://i.pinimg.com/564x/03/11/30/0311301bbb765f1a4090bae7ccb805e0.jpg' };

    return (
        <ImageBackground
            source={image} 
            resizeMode="repeat">
            <View style={styles.layout}>
                <View style={styles.title}>
                    <Text style={styles.login}>TechNail</Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.icon}>
                        <MaterialIcons
                            name="email"
                            size={14}
                            color="black"
                        />
                    </View>
                    <View style={styles.email}>
                        <TextInput
                            multiline
                            keyboardType='email-address'
                            placeholder='Enter your email'
                        />
                    </View>
                </View>
                <View style={styles.input}>
                    <View style={styles.icon}>
                        <FontAwesome5
                            name="key"
                            size={12}
                            color="black" />
                    </View>
                    <View style={styles.password}>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Enter your password'
                            contextMenuHidden={true}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button
                        title='login'
                        color='#E33488'
                        onPress={() => navigation.navigate('Menu')}
                    >
                    </Button>
                    <Text style={styles.legend}>Or login with Social Media</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    layout: {
        marginTop: 240,
        marginLeft: 72,
        marginBottom: 240,
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%',
        width: '70%',
        backgroundColor: '#FFF0F5',
        borderRadius: 10,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        alignContent: 'flex-start',
        width: 60,
        height: 45,
    },
    login: {
        marginTop: 0,
        marginBottom: 10,
        color: '#E33488',
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        width: '80%',
        borderWidth: 1,
        color: 'gray',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    icon: {
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 100,
        marginTop: 10,
    },
    legend: {
        flex: 1,
        color: 'silver',
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
});
