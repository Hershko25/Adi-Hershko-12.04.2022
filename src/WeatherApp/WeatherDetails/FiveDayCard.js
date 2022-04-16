import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import getIcon from '../icons/GetIcon';





const CardContainer = styled.ul`
display: flex;
justify-content: space-evenly;
list-style: none;
background: rgba(150, 138, 138, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(150, 138, 138, 0.3);
text-align: center;
color: white;


@media (max-width: 992px){
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

& .fivecard{
    border-radius: 16px;
    padding: 25px;
    @media (max-width: 992px){
    margin-bottom: 25px;
    }
    & .daynight{
        font-size: 14px;
    }
    & img{
        transition: ease-in-out 0.3s;

        &:hover{
           transform:scale(1.2) ;
        }
    }
    
}


`;


export default function FiveDayCard() {

  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const FiveForCast = useSelector(state => state.Fivedaydailyforecast.array)
  const Temperature = useSelector(state => state.Locationkey.temperature);



  return (
    <CardContainer>
      <h1>Five Day Daily Forecast</h1>
      {
        FiveForCast.map((per, key) => {
          let dt = new Date(per.Day);
          return (
            <li className='fivecard' key={key}>
              {weekDay[dt.getDay()]}<br />
              <img src={getIcon(per.Precipitation_Type_day)} alt='icon' />

              {
                Temperature ?
                  <p className='daynight'>
                    Day {per.day_tempC} °C <br /> Night {per.night_tempC} °C <br />
                    <br />
                    {dt.getMonth()} / {dt.getDate()} / {dt.getFullYear()}
                  </p>
                  :
                  <p className='daynight'>
                    Day {per.day_tempF} °F <br /> Night {per.night_tempF} °F<br />
                    <br />
                    {dt.getMonth()} / {dt.getDate()} / {dt.getFullYear()}
                  </p>
              }
            </li>)
        }
        )
      }

    </CardContainer>
  )
}
