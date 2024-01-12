import { IGenreProps } from "../screens/Home"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      categories: {
        genre: IGenreProps
      }
    }
  }
}