import React from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import Helmet from 'react-helmet'
const Container = styled.div`

display: flex;
justify-content:space-between;
flex-wrap: wrap;

`


const Home = () => {
  return (
    
    <Container>
           <Helmet>
        <title>Youtube || Home  </title>
      </Helmet>
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
    <Card  />
   
  
    </Container>
  )
}

export default Home
