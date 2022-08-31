import React from 'react'
import styled from 'styled-components'
import HouseIcon from '@mui/icons-material/House';
import SettingsIcon from '@mui/icons-material/Settings';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
 flex: 1;
 background-color:${({theme})=> theme.bg};
 color:${({theme})=> theme.text};
 height: 100vh;
 position: sticky;
 top: 0;
 `
const Wrapper = styled.div`
    padding: 5px 10px;

    
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 15px;
`
const Img = styled.img`

width: 30px;
height: 25px;


    
`
const Item = styled.div`
    display: flex;
    padding: 5px 0px;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    font-size: 13px;
`
const Hr = styled.hr`

 margin: 10px 0px;
 border: 0.5px solid #373737;

`

const LogIn = styled.div`

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
const Title = styled.h2`
    
    color: #aaaa;
    margin-bottom: 5px;
    font-size: 8px;
    font-weight: 200;

`




const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
    <Wrapper >
        <Logo>
            <Img src="https://raw.githubusercontent.com/safak/youtube2022/react-video-ui/src/img/logo.png" alt="LOGO IMG" />
             YouTube
        </Logo>
        <Item>
            <HouseIcon />
            Home
        </Item>
        <Item>
            <ExploreIcon />
            Explore
        </Item>
     
        <Item>
            <SubscriptionsIcon />
            Subscription
        </Item>
        <Hr />
        <Item>
            <VideoLibraryIcon />
            Library
        </Item>
        <Item>
            <HistoryIcon />
            History
        </Item>
        <Hr />
        <LogIn >


      
       <h5>  Sign In to Like,Comment And Subscribes</h5>
   
<Button>
            <AccountCircleIcon />
SIGN IN
</Button>

        </LogIn>
        <Hr />
        <Title>
            <h2>BEST OF YOUTUBE</h2>
        </Title>
        <Item>
            <LibraryMusicIcon />
            Music
        </Item>
        <Item>
            <SportsCricketIcon />
            Sports
        </Item>
        <Item>
            <SportsEsportsIcon />
            Games
        </Item>
        <Item>
            <MovieIcon />
            Movie
        </Item>
        <Item>
            <ArticleIcon />
            News
        </Item>
        <Item>
            <LiveTvIcon />
            Live
        </Item>
        <Hr />
        <Item>
            <SettingsIcon />
            Settings
        </Item>
        <Item>
            <FlagIcon />
            Reports
        </Item>
        <Item>
            <HelpIcon />
            Help
        </Item>
        <Item onClick={()=> setDarkMode(!darkMode)} >
            <LightModeIcon />
            Light Mode
        </Item>
    </Wrapper>
    </Container>
  )
}

export default Menu
