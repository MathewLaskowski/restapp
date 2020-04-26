import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import RestaurantPickUp from '../components/restaurant-pick-up/restaurant-pick-up.component';

const HomePage = () => (
  <>
    <GlobalStyle />
    <Title>Rest App</Title>
    <RestaurantPickUp />
  </>
)

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(93deg, rgba(82,11,36,1) 0%, rgba(156,8,8,1) 56%, rgba(213,83,0,1) 100%);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 6rem;
  font-family: Arial, monospace;
  min-width: 400px;
`

export default HomePage
