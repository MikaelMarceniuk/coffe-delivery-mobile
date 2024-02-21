import { useAssets } from 'expo-asset'
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native'
import Coffe from '../@types/Coffe'
import getCoffeImage from '../utils/getCoffeImage'
import { StackNavigatorRoutesProps } from '../router';

const Container = styled.TouchableOpacity`
  height: 120px;
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 40px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  flex-direction: row;
  gap: 10px;

  background-color: ${({ theme }) => theme.Colors.gray700};
`

const ImageContainer = styled.View`
  width: 96px;
  height: 96px;
`

const Image = styled.Image`
  width: 96px;
  height: 96px;

  position: absolute;
  top: -20px;
`

const InformationContainer = styled.View`
  width: 80%;
  padding: 10px;

  justify-content: space-evenly;
`

const CoffeName = styled.Text`
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Sm}px;
`

const CoffeDescription = styled.Text`
  font-family: ${({ theme }) => theme.Typography.RobotoRegular};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Xs}px;
  color: ${({ theme }) => theme.Colors.gray400};
`

const CoffePriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

const CoffePriceCurrency = styled.Text`
  font-family: ${({ theme }) => theme.Typography.RobotoRegular};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Md}px;
  color: ${({ theme }) => theme.Colors.yellow};
`

const CoffePriceValue = styled.Text`
  font-family: ${({ theme }) => theme.Typography.Ballo2Bold};
  font-size: ${({ theme }) => theme.Sizes.Ballo.Md}px;
  color: ${({ theme }) => theme.Colors.yellowDark};
`

const CoffeListItem: React.FC<Coffe> = (coffe) => {
  const [assets, error] = useAssets([getCoffeImage(coffe.img)])
  const navigator = useNavigation<StackNavigatorRoutesProps>()

  const handleOnPress = () => navigator.push('product', { coffe })

  return (
    <Container onPress={() => handleOnPress()}>
      <ImageContainer>
        {assets && <Image source={assets[0]} />}
      </ImageContainer>

      <InformationContainer>
        <CoffeName>{coffe.name}</CoffeName>
        <CoffeDescription>{coffe.description}</CoffeDescription>
        <CoffePriceContainer>
          <CoffePriceCurrency>{coffe.currency}</CoffePriceCurrency>
          <CoffePriceValue>{coffe.price}</CoffePriceValue>
        </CoffePriceContainer>
      </InformationContainer>
    </Container>
  )
}

export default CoffeListItem
