
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Container = styled.div`
position:sticky;
top: 0;
height: 56px;
background-color:${({theme})=> theme.bgLighter}



`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content:flex-end;
height: 100%;

position: relative;




`
const Search = styled.div`

position: absolute;
left: 0;
right: 0;
margin: auto;
width: 40%;
display: flex;
align-items: center;
padding: 5px;
border-radius: 5px;
border: 1px solid #ccc;


`
const Input = styled.input`

border: none;
width:100%;
height:2rem;
padding: 5px;
background: transparent;
outline: none;
color:${({theme})=> theme.text};





`
const Button = styled.button`
align-items: center;
margin: 10px 15px;
padding: 5px 15px ;
border: 1px solid #346beb;
background-color:transparent;
color: #346beb;
cursor: pointer;
gap: 5px;

border-radius: 5px;
display: flex;


`


const Navbar = () => {
  return (
   <Container>
<Wrapper>
<Search >

<Input type="search" placeholder="Search Here" />
<SearchIcon />

</Search>
<Link  to="/signin" style={{textDecoration: "none"}}>
<Button>
  <AccountCircleIcon />
SIGN IN
</Button>
</Link>
</Wrapper>

   </Container>
  )
}

export default Navbar
