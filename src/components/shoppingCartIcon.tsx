import styled, { useTheme } from 'styled-components/native'
import { ShoppingCart } from 'phosphor-react-native'
import React from 'react'

const Container = styled.View`
  height: 36px;

  justify-content: center;
`

type ShoppingCartIconProps = {
  doesHaveItems: boolean
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({
  doesHaveItems,
}) => {
  const { Colors } = useTheme()

  return (
    <Container>
      <ShoppingCart
        weight="fill"
        color={doesHaveItems ? Colors.purple : Colors.yellow}
      />
    </Container>
  )
}

export default ShoppingCartIcon
