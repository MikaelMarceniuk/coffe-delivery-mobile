import styled from 'styled-components/native'
import { MagnifyingGlass } from 'phosphor-react-native'

const Container = styled.View`
  height: 42px;
  padding: 0 8px;

  gap: 8px;
  flex-direction: row;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.Colors.gray200};
`

const TextInput = styled.TextInput.attrs(({ theme }) => {
  return {
    placeholder: 'Pesquisar',
    placeholderTextColor: theme.Colors.gray400,
  }
})`
  flex: 1;
  color: ${({ theme }) => theme.Colors.white};
  font-family: ${({ theme }) => theme.Typography.RobotoRegular};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Sm}px;
`

const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => {
  return {
    color: theme.Colors.gray400,
    size: 16,
  }
})``

const SearchInput = () => {
  return (
    <Container>
      <SearchIcon />
      <TextInput />
    </Container>
  )
}

export default SearchInput
