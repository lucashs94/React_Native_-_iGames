import { IGenreProps } from "../screens/Home"

export type DetailsRouteProps = {
  gameId: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      detail: DetailsRouteProps
      categories: {
        genre: IGenreProps
      }
      search: {
        searchText: string | null
      }
      favorites: undefined
    }
  }
}