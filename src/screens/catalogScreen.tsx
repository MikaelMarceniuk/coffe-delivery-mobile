import styled, { useTheme } from 'styled-components/native'
import Navbar from '../components/navbar'
import SearchInput from '../components/searchInput'
import CoffeShowcaseList from '../components/coffeShowcaseList'
import CoffeList from '../components/coffeList'
import { View } from 'react-native'

const Container = styled.ScrollView`
  flex: 1;

  background-color: ${({ theme }) => theme.Colors.white};
`

const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 342px;

  position: absolute;
  top: 0;

  background-color: ${({ theme }) => theme.Colors.gray100};
`

const IntroContainer = styled.View`
  padding: 20px;

  gap: 16px;
`

const Intro = styled.Text`
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Md}px;
  color: ${({ theme }) => theme.Colors.white};
`

const CatalogScreen: React.FC = () => {
  return (
    <Container>
      <ImageBg />
      <Navbar />

      <IntroContainer>
        <Intro>Encontre o café perfeito para qualquer hora do dia</Intro>
        <SearchInput />
      </IntroContainer>

      <CoffeShowcaseList />
      <CoffeList />
    </Container>
  )
}

export default CatalogScreen
