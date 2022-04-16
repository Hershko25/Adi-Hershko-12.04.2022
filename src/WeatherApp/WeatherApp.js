import React, { useState,useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import {getcurrentweather} from './Store/CurrentWeather';
import {getFivedaydailyforecast} from './Store/Fivedaydailyforecast';



const FetchState = styled.section`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

& div{
  width: 450px;
  height: 450px;
  background: rgba(150, 138, 138, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(150, 138, 138, 0.3);
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

}

`;





export default function WeatherApp() {

  const dispatch = useDispatch();
  const Locationkey = useSelector((state) => state.Locationkey.array);
  const Fivedaydailyforecast = useSelector((state) => state.Fivedaydailyforecast.Error);
  const currentweathert = useSelector((state) => state.CurrentWeather.Error);
  const [bool, setbool] = useState({ load: false, title: 'loading' });



  useEffect(() => {
    if (Fivedaydailyforecast === 'loading' && currentweathert === 'loading') {
      dispatch(getcurrentweather(Locationkey[0].key, Locationkey[0].City, Locationkey[0].Country));
      dispatch(getFivedaydailyforecast(Locationkey[0].key));
    }
    else if (Fivedaydailyforecast === '' && currentweathert === '') {
      setbool({ load: true, title: '' });
    }
    else if (Fivedaydailyforecast === 'Error' || currentweathert === 'Error') {
      setbool({ load: false, title: 'Error Server' });
    }

  }, [dispatch, Locationkey, Fivedaydailyforecast, currentweathert])




  return (
    <>
      {
        bool.load ? <main>
          <HeroSection />
          <WeatherDetails />
        </main> : <FetchState><div><p>{bool.title}</p></div></FetchState>
      }
    </>
  )
}


