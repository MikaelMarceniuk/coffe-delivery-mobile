import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CatalogScreen from './screens/catalogScreen'

const Stack = createStackNavigator()

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Catalog"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackRouter
