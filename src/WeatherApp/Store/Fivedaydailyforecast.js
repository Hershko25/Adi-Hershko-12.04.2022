import { createSlice } from "@reduxjs/toolkit";




const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
const apikey = "4hWSnPaS4o39gPDu9V4DULqEdmptySLy";


const initialFivedaydailyforecast = { array: [] ,Error:'loading'};

const FivedaydailyforecastSlice = createSlice({
    name: 'Fivedaydailyforecast',
    initialState: initialFivedaydailyforecast,
    reducers: {
        Fivedaydailyforecast(state, action) {
            state.array = action.payload;
            state.Error='';
            console.log(state.array )
            
        },
        errorhandling(state){
           state.Error='Error';
        }
    
    }
})


export const getFivedaydailyforecast = (event) => {
    return (dispatch) => {
        
        if (event !== '') {
            let apiUrl = `${url}/${event}?apikey=${apikey}`;
            fetch(apiUrl)
                .then(res => {
                    return res.json()
                })
                .then(
                    (result) => {
                        console.log();
                        let temp = [];
                        result["DailyForecasts"].map((per) => {
                            console.log();
                            temp.push({
                                Day: per.Date,
                                Precipitation_Type_day: per.Day.Icon,
                                Precipitation_Type_night: per.Night.Icon,
                                day_tempF:per.Temperature.Maximum.Value,
                                night_tempF:per.Temperature.Minimum.Value,
                                day_tempC:Math.round((per.Temperature.Maximum.Value-32)*5/9),
                                night_tempC:Math.round((per.Temperature.Minimum.Value-32)*5/9),
                            })
                        })
                        dispatch(FivedaydailyforecastActions.Fivedaydailyforecast(temp))
                    },
                    (error) => {
                        dispatch(FivedaydailyforecastActions.errorhandling())
                    });
        }
        else {
            let empty = [];
            dispatch(FivedaydailyforecastActions.Fivedaydailyforecast(empty))
        }



}
}
export const FivedaydailyforecastActions = FivedaydailyforecastSlice.actions;

export default FivedaydailyforecastSlice.reducer;