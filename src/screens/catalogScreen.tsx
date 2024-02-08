import { Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.white};
`

const CatalogScreen: React.FC = () => {
  return (
    <Container>
      <Text>This is CatalogScreen</Text>
    </Container>
  )
}

export default CatalogScreen
