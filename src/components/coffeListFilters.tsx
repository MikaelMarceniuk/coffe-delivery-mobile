import { FlatList } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View``

const Title = styled.Text`
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Md}px;
`

const TagContainer = styled.View`
  padding: 6px 12px;
  margin-right: 8px;

  border: 1px solid;
  border-color: ${({ theme }) => theme.Colors.purple};
  border-radius: 100px;
`

const TagContent = styled.Text`
  font-family: ${({ theme }) => theme.Typography.RobotoBold};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Tag}px;
  color: ${({ theme }) => theme.Colors.purple};
`

interface IProps {
  data: {
    id: number
    name: string
  }[]
}

const CoffeListFilters: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Title>Nossos cafés</Title>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TagContainer>
            <TagContent>{item.name}</TagContent>
          </TagContainer>
        )}
        horizontal
      />
    </Container>
  )
}

export default CoffeListFilters
