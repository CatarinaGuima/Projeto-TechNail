import { ImageBackground, Button, View, StyleSheet } from "react-native";


export function WelcomeScreen({ navigation }) {
    return (
        <>

            <ImageBackground style={{ flex: 1, width: '100%'}}
                resizeMode='cover'
                source={require('../Images/welcome.png')}>
            </ImageBackground>
            <View style={styles.Button}>
                <Button
                title="Continue"
                color='deeppink'
                onPress={() => navigation.navigate('Menu')}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        marginTop: 20
    }
  });