import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateForm from './components/form/CreateForm';
import ListForm from './components/form/ListForm';
import EditForm from './components/form/EditForm';
import SeeForm from './components/form/SeeForm';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Nav />
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: Platform.OS === 'web' ? false : true,
        headerStyle: {
          backgroundColor: '#1E40AF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
      <Stack.Screen name="CreateForm" component={CreateForm} options={{ title: 'Crear Formulario' }}/>
      <Stack.Screen name="FormListScreen" component={ListForm} options={{ title: 'Ver Formularios' }}/>
      <Stack.Screen name="EditFormScreen" component={EditForm} options={{ title: 'Editar Formulario' }}/>
      <Stack.Screen name="SeeFormScreen" component={SeeForm} options={{ title: 'Ver Formulario' }}/>
    </Stack.Navigator>
  </View>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
