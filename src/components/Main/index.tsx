import { FC } from 'react'
import * as S from './styles'

interface IMain {
  title?: string
  description?: string
}

const Main: FC<IMain> = ({
  title = 'Boilerplate React + NextJS',
  description = 'TypeScript, React, NextJS, Jest, Testing Library, Storybook and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="img/logo.svg" alt="Athom image with a Boilerplate text" />
    <S.Title>{title}</S.Title>
    <S.Description> {description} </S.Description>
    <S.Illustration src="img/hero-illustration.svg" alt="Developer coding" />
  </S.Wrapper>
)

export default Main
