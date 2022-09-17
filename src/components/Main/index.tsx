import { FC } from 'react'
import * as S from './styles'

const Main: FC = () => (
  <S.Wrapper>
    <S.Logo src="img/logo.svg" alt="Athom image with a Boilerplate text" />
    <S.Title>Boilerplate React + NextJS</S.Title>
    <S.Description>
      TypeScript, React, NextJS, Jest, Testing Library, Storybook and Styled
      Components
    </S.Description>
    <S.Illustration src="img/hero-illustration.svg" alt="Developer coding" />
  </S.Wrapper>
)

export default Main
