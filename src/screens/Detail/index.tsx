
import { FlatList, View } from 'react-native'
import { 
  Container, 
  Content, 
  DescriptionArea, 
  GenresArea, 
  OthersInfosArea, 
  PrimaryInfosArea, 
  ScrollImages 
} from './styles'

const DATA = [
  {
    name: "Hitman",
    background_image: "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
    rating: "3.92",
  },
  {
    name: "Stardew Valley",
    background_image: "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    rating: "4.4",
  },
  {
    name: "Garry's Mod",
    background_image: "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
    rating: "3.79",
  },
]


export function Detail() {
  return (
    <Container>

      <ScrollImages>
        <FlatList 
          data={DATA}
          keyExtractor={item => item.name}
          renderItem={({item}) => <View style={{ width: '100%', height: '100%'}}></View>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={{ flex: 1 }}
        />
        
      </ScrollImages>

      <Content>
        <PrimaryInfosArea>

        </PrimaryInfosArea>

        <GenresArea>

        </GenresArea>

        <DescriptionArea>

        </DescriptionArea>

        <OthersInfosArea>

        </OthersInfosArea>
      </Content>

    </Container>
  )
}