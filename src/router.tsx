import { NavigationContainer } from '@react-navigation/native'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import Coffe from './@types/Coffe'
import CatalogScreen from './screens/catalogScreen'
import ProductScreen from './screens/productScreen'
import PurchaseCompletedScreen from './screens/purchaseCompletedScreen'
import ShoppingCartScreen from './screens/shoppingCartScreen'

export type StackNavigatorScreens = {
  catalog: undefined
  product: { coffe: Coffe }
  shoppingCart: undefined
  purchaseCompleted: undefined
}

export type StackNavigatorRoutesProps = StackNavigationProp<StackNavigatorScreens>

const { Navigator, Screen } = createStackNavigator<StackNavigatorScreens>()

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="catalog"
        screenOptions={{ headerShown: false }}
      >
        <Screen
          name="catalog"
          component={CatalogScreen}
        />

        <Screen
          name="product"
          component={ProductScreen}
        />

        <Screen
          name="purchaseCompleted"
          component={PurchaseCompletedScreen}
        />

        <Screen
          name="shoppingCart"
          component={ShoppingCartScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default StackRouter
