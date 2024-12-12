
import './App.css'
import Sun from "./assets/weather (1).png"
import Rain from "./assets/weather-app (1).png"
import CloudIcon from "./assets/weather.png"
import SearchIcon from "./assets/search.png"

const WeatherDetails=()=>{
    return (<>
    <div className='image'>
      <img src={Sun} alt="image"  />
    </div>
    </>
    )
}
function App() {
 

  return (
    <>
    <div className='container'>
      <div className='input-container'>
        <input type="text" className='search' placeholder='search item' />
        <div className='search-icon'>
          <img src={SearchIcon} alt="" />
        </div>
        
      </div>
      <WeatherDetails />

    </div>
    </>
  )
}

export default App
