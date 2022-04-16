import { createSlice } from "@reduxjs/toolkit";




const url = "https://dataservice.accuweather.com";
const apikey = "4hWSnPaS4o39gPDu9V4DULqEdmptySLy";
const initialcurrentweather = { array: [],Error:'loading'};

const CurrentWeatherSlice = createSlice({
  name: 'currentweather',
  initialState: initialcurrentweather,
  reducers: {
    currentweather(state, action) {
      state.array = action.payload;
      state.Error='';
    },
    errorhandling(state){
      state.Error='Error';
    }
  }
})


export const getcurrentweather = (key, City, Country) => {

  return (dispatch) => {
    

    let temp = [];
    let apiUrl = `${url}/currentconditions/v1/${key}?apikey=${apikey}`;
    fetch(apiUrl)
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          result.map((per) => {
            temp.push({
              Country: Country,
              City: City,
              WeatherText: per.WeatherText,
              TemperatureC: Math.round(per.Temperature.Metric.Value),
              TemperatureF: Math.round(per.Temperature.Metric.Value * 9 / 5 + 32),
              icon:per.WeatherIcon
            })
          }
          )
          dispatch(CurrentWeatherActions.currentweather(temp))
        },
        (error) => {
         dispatch(CurrentWeatherActions.errorhandling())
        });


  }

}
export const CurrentWeatherActions = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;

