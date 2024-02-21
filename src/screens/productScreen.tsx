import { Text, View } from "react-native"
import type { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorScreens } from "../router";
import Navbar from "../components/navbar";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.Colors.white};
`

const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 546px;

  position: absolute;
  top: 0;

  background-color: ${({ theme }) => theme.Colors.gray100};
`

type Props = StackScreenProps<StackNavigatorScreens, 'product'>;

const ProductScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Container>
      <ImageBg />
      <Navbar goBackConfig={{
        isShow: true,
        handler: () => navigation.goBack()
      }} />

      <Text>Product Screen</Text>
    </Container>
  )
}

export default ProductScreen