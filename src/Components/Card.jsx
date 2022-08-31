import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:360px;
margin-bottom: 45px;
cursor:pointer;
/* padding: 20px; */


`
const Image = styled.img`

width: 100%;
height:202px;
background-color:grey;




`
const Details = styled.div`

display:flex;
margin-top:16px;
gap:12px;
`
const ChannelImage = styled.img`

width:36px;
height:36px;
border-radius:50%;
background-color:grey;


`



const Card = () => {
  return (
    <Container>
<Image src="https://wallpaperaccess.com/full/2541963.jpg" alt="Error Img" />
  <Details>
   <ChannelImage />

  </Details>

    </Container>
  )
}

export default Card