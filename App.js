import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Pages/home';
import { DetailsScreen } from './src/Pages/details';
import { SettingsScreen } from './src/Pages/settings';
import { ApointmentScreen } from './src/Pages/appointment';
import { ProfileScreen } from './src/Pages/profile';
import { WelcomeScreen } from './src/Pages/welcome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function IconHome() {
  return (
    <AntDesign name="home" size={28} color="deeppink" />
  );
}

function IconAppointment() {
  return (
    <MaterialCommunityIcons name="calendar-clock" size={28} color="deeppink" />
  );
}

function IconProfile() {
  return (
    <Octicons name="person" size={28} color="deeppink" />
  );
}

function IconSettings() {
  return (
    <AntDesign name="setting" size={28} color="deeppink" />
  );
}

function MyTabs() {
  return (

    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'deeppink', tabBarInactiveTintColor: 'black' }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home', headerTitleAlign: 'center', tabBarLabel: 'Home', tabBarIcon: IconHome }} />
      <Tab.Screen name='Appointment' component={ApointmentScreen} options={{ headerShown: false, tabBarLabel: 'Agendamento', tabBarIcon: IconAppointment }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false, tabBarLabel: 'Perfil', tabBarIcon: IconProfile }} />
      <Tab.Screen name='Settings' component={SettingsScreen} options={{ title: "Configurações", headerTitleAlign: 'center', tabBarLabel: 'Configurações', tabBarIcon: IconSettings }} />
    </Tab.Navigator>

  );
}

function MyStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false, headerTitleAlign: 'center' }} >
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Menu' component={MyTabs} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ headerShown: true, title: "Detalhes", headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
      <MyStacks/>
  )
}
