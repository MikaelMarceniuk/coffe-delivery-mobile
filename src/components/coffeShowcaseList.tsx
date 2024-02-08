import { Animated, View, useWindowDimensions } from 'react-native'
import Coffe from '../@types/Coffe'
import CoffesMock from '../mocks/coffes.json'
import CoffeShowcaseItem from './coffeShowcaseItem'
import { useRef, useState } from 'react'
import { Dimensions } from 'react-native'

interface ICoffeShowcase {
  category: string
  coffe: Coffe
}

const getRandomCoffes = (): ICoffeShowcase[] | { category: string }[] => {
  const randomCoffes: ICoffeShowcase[] = []
  CoffesMock.forEach(({ category, products }) => {
    randomCoffes.push({
      category,
      coffe: products[Math.floor(Math.random() * products.length)],
    })
  })

  return [{ category: 'dummy' }, ...randomCoffes, { category: 'dummy' }]
  // return randomCoffes
}

const CoffeItemSpacing = 10
const CoffeItemOffset = 220
const CoffeItemSize = 208 + CoffeItemSpacing
const DummySize = (Dimensions.get('screen').width - CoffeItemSize) / 2

const CoffeShowcaseList: React.FC = () => {
  const [data, setData] = useState(getRandomCoffes())
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <Animated.FlatList
      data={data}
      renderItem={({ item, index }) => {
        if (item.category == 'dummy')
          return <View style={{ width: DummySize }} />

        // Pega os valores do anterior, atual e proximo item
        const inputRange = [
          (index - 2) * CoffeItemOffset,
          (index - 1) * CoffeItemOffset,
          index * CoffeItemOffset,
        ]

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8],
        })

        return (
          <Animated.View
            style={{
              marginHorizontal: CoffeItemSpacing,
              transform: [{ scale }],
            }}
          >
            <CoffeShowcaseItem {...item} />
          </Animated.View>
        )
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      snapToOffsets={data.map(
        (_item, i) => i * CoffeItemSize + CoffeItemOffset
      )}
      contentContainerStyle={{
        height: 262,
        alignItems: 'center',
      }}
      scrollEventThrottle={16}
      snapToInterval={CoffeItemSize}
      decelerationRate={0}
      bounces={false}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default CoffeShowcaseList
