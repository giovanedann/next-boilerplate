/* eslint-disable @typescript-eslint/no-empty-interface */

// place your theme interface here (or in another folder)
export interface Theme {}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {} // extends your theme interface
}
