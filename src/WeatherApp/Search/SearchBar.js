import React,{useState} from "react";
import styled from 'styled-components';
import { useDispatch,useSelector } from "react-redux";
import {  getcurrentweather } from '../Store/CurrentWeather'
import { getlocationkey } from '../Store/Locationkey'
import {getFivedaydailyforecast} from '../Store/Fivedaydailyforecast';
import {LocationkeyActions} from '../Store/Locationkey';




const Search = styled.div`

display: flex;
align-items: center;
flex-direction: column;



& input {
  background-color: transparent;
  color: white;
  border: 0;
  border-bottom:solid white 2px;
  border-radius: 2px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 30px;
  width: 300px;
  margin-top: 25px;

  &::placeholder {
  color:white;
}

  &:focus {
  outline: none;
  border-bottom: solid #2980b9 3px ;
}

}
& .dataResult {
  margin-top: 5px;
  padding-left: 0;
  width: 300px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  list-style: none;
  background-color: rgba(0,0,0, 0.4);

  &::-webkit-scrollbar {
  display: none;
  }

  & li{
    padding:2px  10px ;
    color: white;
    transition:all ease-in-out 0.3s;
    cursor: pointer;

    &:hover{
      background: white;
      color: black;
  }
  }
  
}
& .dataItem {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
  
}
& p {
  margin-left: 10px;
}
& a {
  text-decoration: none;


}
`;

export default function SearchBar() {

  const dispatch = useDispatch();
  const Locationkey = useSelector((state) => state.Locationkey.array);
  const [placeholdertext, setplaceholdertext] = useState('');


  const handleFilter = (event) => {
    dispatch(getlocationkey(event.target.value))
    setplaceholdertext(event.target.value);
  };



  const setlocationkey = (key,City,Country) => {
    setplaceholdertext(`${City}, ${Country}`);
    dispatch( getcurrentweather(key,City,Country));
    dispatch(getFivedaydailyforecast(key));
    dispatch( LocationkeyActions.setlocationkey([]))   
  }
  return (
    <Search>
      <div >
        <input
          type="text"
          onChange={handleFilter}
          value={placeholdertext}
          placeholder={'Search'}
        />
      </div>
      {Locationkey.length !== 0 && (
        <ul className="dataResult">
          {Locationkey.slice(0, 15).map((value, key) => {
            return (
              <li key={key} onClick={() => setlocationkey(value.key,value.City,value.Country)}>
                <p>{value.City} ,{value.Country} </p>
              </li>
            );
          })}
        </ul>
      )}
    
      
      </Search>
  )
}
