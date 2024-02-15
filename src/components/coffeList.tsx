import { FlatList, View, Text } from 'react-native'
import styled from 'styled-components/native'
import CoffesMock from '../mocks/coffes.json'
import CoffeListFilters from './coffeListFilters'

const Container = styled.View`
  flex: 1;
`

type CoffeCategory = {
  id: number
  name: string
}

const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Xs}px;
  color: ${({ theme }) => theme.Colors.gray400};
`

const getCoffesCategories = (): CoffeCategory[] =>
  CoffesMock.map((coffe, i) => ({ id: i, name: coffe.category }))

const CoffeList: React.FC = () => {
  return (
    <Container>
      <CoffeListFilters data={getCoffesCategories()} />

      <FlatList
        data={CoffesMock}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <SectionTitle>{item.category}</SectionTitle>
          </View>
        )}
      />
    </Container>
  )
}

export default CoffeList
