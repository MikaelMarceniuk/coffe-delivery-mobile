const coffeImages = {
  expressoTradicional: require('../assets/expresso-tradicional.png'),
  expressoAmericano: require('../assets/expresso-americano.png'),
  expressoCremoso: require('../assets/expresso-cremoso.png'),
  latte: require('../assets/latte.png'),
  expressoGelado: require('../assets/expresso-gelado.png'),
  capuccino: require('../assets/capuccino.png'),
  mocaccino: require('../assets/mocaccino.png'),
  chocolateQuente: require('../assets/chocolate-quente.png'),
  cubano: require('../assets/cubano.png'),
  havaiano: require('../assets/havaiano.png'),
  arabe: require('../assets/arabe.png'),
  irlandes: require('../assets/irlandes.png'),
}

export type CoffeImageType = keyof typeof coffeImages

const getCoffeImage = (coffeImage: CoffeImageType) => coffeImages[coffeImage]

export default getCoffeImage
