import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components';
import getIcon from '../icons/GetIcon';
import CloseIcon from '@mui/icons-material/Close';
import {FavoriteSavetActions} from '../Store/FavoriteSave';


const Container = styled.div`
    width: 40%;
    margin: auto;
   


    & p{
      text-align: center;
      color: white;
    }

    & ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 0;
        text-align: center;
        color: white;
        
    }

    & li{
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      margin: 15px;
      transition: ease-in 0.3s;

      &:hover{
        transform: scale(1.2);
      }
    }

`;

export default function Favorite() {

  const dispatch=useDispatch();

  const removeitem =(id)=>{
    dispatch(FavoriteSavetActions.removeItem(id));
  }

  const FavoriteItems = useSelector((state) => state.FavoriteSave.info);
  return (
    <Container>
      {
        FavoriteItems.length > 0 ?
          <ul>
            {
              FavoriteItems.map((per, key) => {
                return(
                <li key={key}>
                   <CloseIcon  onClick={()=>removeitem(per.id)}/>
                  <h3>{per.City}, {per.Country}</h3>
                  <img src={getIcon(per.icon)} alt='icon' />
                  <p>{per.temperature} °C</p>
                </li>)
              })
            }
          </ul>
           :
          <p>No saving items</p>
      }
    </Container>
  )
}
