import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import LocationkeyReducer from './Locationkey'
import CurrentWeatherReducer from './CurrentWeather';
import FivedaydailyforecastReducer from './Fivedaydailyforecast';
import FavoriteSaveReducer from './FavoriteSave'


const store=configureStore({
    reducer:{Locationkey:LocationkeyReducer, CurrentWeather: CurrentWeatherReducer,Fivedaydailyforecast:FivedaydailyforecastReducer,FavoriteSave:FavoriteSaveReducer}
})

export default store;