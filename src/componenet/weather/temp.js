// // 
// //api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4b9f46b8d186633bd37af229adb43467

// // 
// import React, { useEffect, useState } from 'react'
// import './style.css';
// const Temp = () => {
//     const [searchValue, setSearchValue] = useState("indore");
//     const[tempInfo ,setTempinfo] =useState("");
//     const getWeatherInfo = async () => {
//         try{
//             let url=`https://api.openweathermap.org/data/2.5/weather?&unit=metric&lat=44.34&lon=10.99&appid=4b9f46b8d186633bd37af229adb43467`;
//             const res=await fetch(url);
//             const data =await res.json();
//             const{temp,humidity,pressure}=data.main;
//             const{main: weathermood} =data.weather[0];
//             const{name} =data;
//             const{speed} =data.wind;
//             const{country , sunset}=data.sys;

//             const Info = ({
//                          temp,
//                          humidity,
//                          pressure,
//                          weathermood,
//                          name,
//                          speed,
//                          country,
//                          sunset,
//             });
//             setTempinfo(Info);
//             // console.log(temp);
//         }

//         catch (error){
//                     console.log(error);
//         }

//      };
//     useEffect ( ()=>{
//         getWeatherInfo();
//     },[]);
//   return (
//     <>
//         <div className='wrap1'>
//         <div className='search'>
//              <input type="search"
//             placeholder='Search...'
//             autoFocus id="search" 
//              className='searchTerm'
//              value={searchValue}
//              onChange={ (a)=>
//                         setSearchValue(a.target.value)
//              }
//              />
//              <button className='searchButton' type="button" onClick={getWeatherInfo}>
//                 Search
//              </button>
//         </div>
//         </div>
        
//         <div>
//             <article className='widget'>
//             <div className='weatherIcon'>
//                  <i className={"wi wi-day-sunny"}></i>
//             </div>
//                 <div className='weatherInfo'>
//                 <div className='temperature'> <span>25.5&deg;</span> </div>
//                   <div className='description'>
//                   <div className='weatherConditon'>sunny</div>
//                    <div className='place'> pune,india</div>
//                   </div>
                                                                                                                                         
//                 </div>
//                    <div className='date'>{new Date().toLocaleString() }</div>
                  
//             </article>

//             <article className='widget1'>
//             <div className='extra-temp'>
//                       <div className='temp-info-minmax'>
//                         <div className='two-sided-section'>
//                             <p>
//                             <i className={"wi wi-sunset"}></i>
//                             </p>
//                             <p className='extra-info-leftside'> 
//                                  19:19 PM  <br />
//                                  Sunset 
//                             </p>
//                         </div>

//                         <div className='two-sided-section'>
//                             <p>
//                             <i className={"wi wi-humidity"}></i>
//                             </p>
//                             <p className='extra-info-leftside'> 
//                                  19:19 PM  <br />
//                                  Humidity 
//                             </p>
//                         </div>
//                       </div>
                       
//                      <div className='weather-extra-info'> 
//                        <div className='two-sided-section'>
//                             <p>
//                             <i className={"wi wi-rain"}></i>
//                             </p>
//                             <p className='extra-info-leftside'> 
//                                  19:19 PM  <br />
//                                  Rain
//                             </p>
//                         </div> 

//                          <div className='two-sided-section'>
//                             <p> <i className={"wi wi-strong-wind"}></i></p>
//                             <p className='extra-info-leftside'> speed  </p>
//                         </div> 
//                       </div> 
//                    </div>
//             </article>
//             <article>
                
//             </article>
//         </div>

//     </>
//   )
// }

// export default Temp


import React, { useState, useEffect } from "react";
import Weathercard from "./weatherCard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url=`https://api.openweathermap.org/data/2.5/weather?&unit=metric&lat=44.34&lon=10.99&appid=4b9f46b8d186633bd37af229adb43467`;
      // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={4b9f46b8d186633bd37af229adb43467}`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;