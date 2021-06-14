import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      border: string
      description: string
      background: string
      subBackground: string
      text: string
      subText: string
      active: string
    }
  }
}