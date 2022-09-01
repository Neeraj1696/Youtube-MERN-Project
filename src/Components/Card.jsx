import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
width:${(props)=>props.type === "sm" && "360px"};
margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "45px"};
cursor:pointer;
gap:10px;
display: ${(props)=>props.type === "sm" && "flex"};


`
const Image = styled.img`

width: 100%;
height:${(props)=>props.type === "sm" ? "120px" : "202px"};
background-color:grey;
flex: 1;




`
const Details = styled.div`

display:flex;
margin-top:16px;
gap:12px;
flex:1;
`
const ChannelImage = styled.img`

width:36px;
height:36px;
border-radius:50%;
background-color:grey;
display: ${(props)=>props.type === "sm" && "none"};


`
const ChannelName = styled.h5`
color: ${({theme})=> theme.text};


;
`
const Title = styled.h2`
font-size: ${(props)=>props.type === "sm" ? "8px" : "12px"};
font-weight:500;
color: ${({theme})=> theme.text};
margin: 5px 0px;
`
const Text = styled.div`
margin: 0px 5px;
font-size:14px;
`
const Info = styled.div`
font-size:10px;
font-weight:100;

margin: 5px 0px;
`



const Card = ({type}) => {
  return (
    <Link to="/video" style={{textDecoration: 'none'}}>
    <Container type={type}>
<Image type={type} src="https://wallpaperaccess.com/full/2541963.jpg" alt="Error Img" />
  <Details type={type}>
   <ChannelImage type={type} src="https://wallpaperaccess.com/full/2541963.jpg" alt="Error Img" />
  <Text>
   <ChannelName>
   <Title type={type}>
<h2>Video Title</h2>
</Title>
    <h5>Chnnel Name</h5>
<Info>125435 views ● 1 day ago  </Info>

   </ChannelName>
   </Text>

  </Details>

    </Container>
    </Link>
  )
}

export default Card