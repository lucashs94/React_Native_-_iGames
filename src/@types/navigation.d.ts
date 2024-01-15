import { IGenreProps } from "../screens/Home"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      detail: undefined
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