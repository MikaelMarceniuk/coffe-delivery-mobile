import CoffesMock from '../mocks/coffes.json'
import styled from 'styled-components/native'
import CoffeListFilters from './coffeListFilters'

const Container = styled.View`
  flex: 1;
`

type CoffeCategory = {
  id: number
  name: string
}

const getCoffesCategories = (): CoffeCategory[] =>
  CoffesMock.map((coffe, i) => ({ id: i, name: coffe.category }))

const CoffeList: React.FC = () => {
  return (
    <Container>
      <CoffeListFilters data={getCoffesCategories()} />
    </Container>
  )
}

export default CoffeList
