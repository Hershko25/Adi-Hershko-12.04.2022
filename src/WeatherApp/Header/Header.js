import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { styled as muistyled } from '@mui/material/styles';



const MaterialUISwitch = muistyled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const HeaderScreen = styled.header`

background:${props=>props.theme===true ? 'black' : 'white'};
color:${props=>props.theme===true ? 'white' : 'black'};
margin: auto;
display: flex;

& .menuIcon{
   padding: 15px;
}

& .theme{
  margin-left: auto;
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
}
& .navpage{
position: fixed;
left:${props => props.move ? '0%' : '-100%'};
background:${props=>props.theme===true ? 'black' : 'white'};
transition: left ease-in-out 0.3s;
width: 40vw;
height: 100%;
z-index: 10;

& ul{
  list-style-type: none;
  padding: 25px;
  & li{
    text-align: center;
  }
}
& button{
  background-color: ${props=>props.theme===true ? 'black' : 'white'};
  border: none;
  color: ${props=>props.theme===true ? 'white' : 'black'};
  padding: 25px;
  margin: 25px 0px;
  width: 80%;
  transition:all ease-in-out 0.3s;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;  
  &:hover{
    color:${props=>props.theme===true ? 'black' : 'white'};
    background-color: ${props=>props.theme===true ? 'white' : 'black'};
    width:100%;
  }
}
}
`;



export default function Header() {
  const [NavOpen, setNavOpen] = useState(false);
  const [Theme, setTheme] = useState(true);



  return (
    < HeaderScreen theme={Theme} move={NavOpen}>
      <MenuIcon className='menuIcon' onClick={() => { setNavOpen(prev => !prev) }} />
      <nav className='navpage' >
        <CloseIcon className='menuIcon' onClick={() => setNavOpen((prev) => !prev)} />
        <ul>
          <Link to={'/'}>
            <li><button onClick={() => setNavOpen((prev) => !prev)}>Home</button></li>
          </Link>
          <Link to={'/favorite'}>
            <li><button onClick={() => setNavOpen((prev) => !prev)}>Favorite</button></li>
          </Link>
        </ul>
      </nav>
      <div className='theme'>
         <MaterialUISwitch onChange={()=>setTheme(prev=>!prev)}/>
      </div>
    </ HeaderScreen>
  )
}
