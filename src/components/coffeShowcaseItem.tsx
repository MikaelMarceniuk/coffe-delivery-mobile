import styled from 'styled-components/native'
import Coffe from '../@types/Coffe'
import { useAssets } from 'expo-asset'
import { Image } from 'react-native'
import getCoffeImage from '../utils/getCoffeImage'

const Container = styled.TouchableOpacity`
  height: 300px;

  align-items: center;
`

const CoffeImageContainer = styled.View`
  position: absolute;
  z-index: 1;
`

const Content = styled.View`
  width: 208px;
  height: 262px;
  margin-top: 25px;
  padding: 80px 10px 10px 10px;

  justify-content: space-around;
  align-items: center;

  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.Colors.gray800};
`

const CategoryTagContainer = styled.View`
  width: 81px;
  height: 21px;

  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${({ theme }) => theme.Colors.purpleLight};
`

const CategoryTagText = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.Typography.RobotoBold};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Tag}px;
  color: ${({ theme }) => theme.Colors.purpleDark};
`

const CoffeInfoContainer = styled.View`
  height: 66px;
`

const CoffeInfoName = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Md}px;
  color: ${({ theme }) => theme.Colors.gray200};
`

const CoffeInfoDescription = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.Typography.RobotoRegular};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Xs}px;
  color: ${({ theme }) => theme.Colors.gray400};
`

const CoffePriceContainer = styled.View`
  width: 66px;
  height: 31px;

  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;
`

const CoffePriceCurrency = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.Typography.RobotoRegular};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Sm}px;
  color: ${({ theme }) => theme.Colors.yellow};
`

const CoffePriceValue = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Lg}px;
  color: ${({ theme }) => theme.Colors.yellow};
`

type Props = { category: string; coffe: Coffe }

const CoffeShowcaseItem: React.FC<Props> = ({ category, coffe }) => {
  const [assets, error] = useAssets([getCoffeImage(coffe.img)])

  return (
    <Container>
      {assets && (
        <CoffeImageContainer>
          <Image source={assets[0]} />
        </CoffeImageContainer>
      )}

      <Content>
        <CategoryTagContainer>
          <CategoryTagText>{category}</CategoryTagText>
        </CategoryTagContainer>

        <CoffeInfoContainer>
          <CoffeInfoName>{coffe.name}</CoffeInfoName>
          <CoffeInfoDescription>{coffe.description}</CoffeInfoDescription>
        </CoffeInfoContainer>

        <CoffePriceContainer>
          <CoffePriceCurrency>{coffe.currency}</CoffePriceCurrency>
          <CoffePriceValue>{coffe.price}</CoffePriceValue>
        </CoffePriceContainer>
      </Content>
    </Container>
  )
}

export default CoffeShowcaseItem
