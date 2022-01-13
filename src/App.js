
import axios from 'axios';
import React,{useState, useEffect}from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import RoverImageList from './components/roverimagelist/RoverImageList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';


const App = ()  => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date("2015/06/03"))


  useEffect( () => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-06-03&api_key=wI2lqTaushheU7bWvv9gPJgOLiH4TO84b9nl8DMl`)
      .then(res => {
        console.log(res)
        setData(res.data.photos)
      })
      .catch( err => {
        console.log(err)
      })
  },[])


 return (
   <div className='App'>
     <Navbar />
     <Header />
     <DatePicker 
     selected={date} 
     minDate={date}
     onChange={date => setDate(date)}
     dateFormat='yyyy/MM/dd'
     closeOnScroll={true}
     showMonthDropdown
     showYearDropdown
     scrollableYearDropdown
     wrapperClassName='datePicker'
     />
     <RoverImageList data ={data} />  
    </div>
)
}
export default App;
