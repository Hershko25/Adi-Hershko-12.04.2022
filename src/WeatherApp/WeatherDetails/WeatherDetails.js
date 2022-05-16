import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FiveDayCard from './FiveDayCard';
import getIcon from '../icons/GetIcon';
import Switch from '@mui/material/Switch';
import { LocationkeyActions } from '../Store/Locationkey';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { FavoriteSavetActions } from '../Store/FavoriteSave';



const WeatherSection = styled.section`

height: 500px;
margin:auto;
padding: 25px;



& .currentWeather{
    margin: auto;
    color:white;
    background: rgba(150, 138, 138, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(150, 138, 138, 0.3);
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img{
        transition: ease-in-out 0.3s;

        &:hover{
           transform:scale(1.5) ;
        }
    }
    
    & .switch{
      margin-left: auto;
      display: flex;
      align-items: center;

    }

    & .Iconandlocation{
        display: flex;
        margin-right: auto;
        
        
        & p{
            margin-top: 0;
            margin-left: 5px;
        }
    }

}
`;


export default function WeatherDetails() {


    const Temperature = useSelector((state) => state.Locationkey.temperature);
    const CurrentWeather = useSelector((state) => state.CurrentWeather);
    const FavoriteSave = useSelector((state) => state.FavoriteSave.info);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });




    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        dispatch(LocationkeyActions.settemperature(!Temperature));
    };

    const addfavorite = () => {
        dispatch(FavoriteSavetActions.SetFavorite({
            Country: CurrentWeather.array[0].Country,
            City: CurrentWeather.array[0].City,
            Temperature: CurrentWeather.array[0].TemperatureC,
            icon: CurrentWeather.array[0].icon
        }))
    }

    return (
        <WeatherSection>
            <div className='containercurrentWeather'>
                <div className='currentWeather'>
                    <div className='switch'>
                        F
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        C

                        <Fab className='fab' color="primary" aria-label="add" style={{ marginLeft: 25 }} onClick={addfavorite} >
                            <AddIcon />
                        </Fab>
                    </div>
                    <div className='Iconandlocation'>
                        <FmdGoodIcon />
                        <p>{CurrentWeather.array[0].City}, {CurrentWeather.array[0].Country}</p>
                    </div>
                    {
                        Temperature ?
                            <h1>{CurrentWeather.array[0].TemperatureC} °C</h1> :
                            <h1>{CurrentWeather.array[0].TemperatureF} °F</h1>
                    }
                    <img src={getIcon(CurrentWeather.array[0].icon)} alt='icon' />
                    <h3>{CurrentWeather.array[0].WeatherText}</h3>
                    <p>{FavoriteSave.length} Favorite Was Save</p>
                </div>
            </div>

            <FiveDayCard />
        </WeatherSection>
    )
}
