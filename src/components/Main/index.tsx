import { FC } from 'react'
import * as S from './styles'

interface IMain {
  title?: string
  description?: string
}

const variants = {
  animate: {
    rotate: [0, 90, 180, 270, 360],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: 'linear'
    }
  },
  hover: {
    y: 200,
    scale: 3
  }
}

const Main: FC<IMain> = ({
  title = 'Boilerplate React + NextJS',
  description = 'TypeScript, React, NextJS, Jest, Testing Library, Storybook, Framer Motion and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      variants={variants}
      animate="animate"
      whileHover="hover"
      src="img/icon-512.png"
      alt="white react athom with pink background"
    />
    <S.Title>{title}</S.Title>
    <S.Description> {description} </S.Description>
    <S.Illustration src="img/hero-illustration.svg" alt="Developer coding" />
  </S.Wrapper>
)

export default Main
