/* eslint-disable @typescript-eslint/no-empty-interface */

// place your theme interface here (or in another folder)
export interface Theme {}

declare global {
  module 'styled-components' {
    interface DefaultTheme extends Theme {} // extends your theme interface
  }
}
