import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { registerRootComponent } from 'expo'
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { ThemeProvider } from 'styled-components/native'
import defaultTheme from './themes/default'
import { StatusBar } from 'react-native'
import StackRouter from './router'

const App = () => {
  const [isFontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  if (!isFontLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={defaultTheme.Colors.gray100}
          translucent
        />
        <SafeAreaView style={{ flex: 1 }}>
          <StackRouter />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default registerRootComponent(App)
