import styled from 'styled-components/native'
import { MapPin, ArrowLeft } from 'phosphor-react-native'
import ShoppingCartIcon from './shoppingCartIcon'

const Container = styled.View`
  width: 100%;
  height: 76px;
  padding: 0 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SideContent = styled.TouchableOpacity`
  height: 36px;

  gap: 6px;
  flex-direction: row;
  align-items: center;
`

const MapPinIcon = styled(MapPin).attrs(({ theme }) => {
  return {
    color: theme.Colors.purple,
    weight: 'fill',
  }
})``

const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => {
  return {
    color: theme.Colors.white,
    weight: 'bold',
  }
})``

const Text = styled.Text`
  color: ${({ theme }) => theme.Colors.gray900};
  font-family: ${({ theme }) => theme.Typography.RobotoRegular};
  font-size: ${({ theme }) => theme.Sizes.Roboto.Sm}px;
`

type Props = {
  goBackConfig?: {
    isShow: boolean
    handler: () => void
  }
}

const Navbar: React.FC<Props> = ({ goBackConfig }) => {
  return (
    <Container>
      <SideContent onPress={() => goBackConfig?.isShow && goBackConfig.handler()}>
        {goBackConfig?.isShow
          ? <ArrowLeftIcon />
          : (
            <>
              <MapPinIcon />
              <Text>Ribeirao Preto, SP</Text>
            </>
          )
        }
      </SideContent>
      <ShoppingCartIcon doesHaveItems={false} />
    </Container>
  )
}

export default Navbar
