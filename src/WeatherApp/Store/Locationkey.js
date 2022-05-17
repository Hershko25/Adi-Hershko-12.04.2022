
import { createSlice } from "@reduxjs/toolkit";

const initialLocationkey = { array: [{ key: '215793', City: 'Tel-Aviv', Country: 'Israel' }], temperature: true, Error: false };
const apikey =  process.env.REACT_APP_API_KEY;


const LocationkeySlice = createSlice({
  name: 'Locationkey',
  initialState: initialLocationkey,
  reducers: {
    setlocationkey(state, action) {
      state.array = action.payload;
    },
    settemperature(state, action) {
      state.temperature = action.payload;
    },
    errorhandling(state) {
      state.Error = !state;
    }

  }
})

export const getlocationkey = (event) => {

  return (dispatch) => {
    if (event !== '') {
      let apiUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey }&q=${event}`;
      fetch(apiUrl)
        .then(res => {
          return res.json()
        })
        .then(
          (result) => {
            let temp = [];
            result.map((per) => {
              return temp.push({ key: per.Key, Country: per.Country.LocalizedName, City: per.LocalizedName, icon: per.WeatherIcon })
            })
            dispatch(LocationkeyActions.setlocationkey(temp))
          },
          (error) => {
            dispatch(LocationkeyActions.errorhandling())
          });
    }
    else {
      dispatch(LocationkeyActions.setlocationkey([]))
    }
  }

}



export const LocationkeyActions = LocationkeySlice.actions;

export default LocationkeySlice.reducer;