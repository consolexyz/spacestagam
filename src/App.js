
import axios from 'axios';
import React,{useState, useEffect}from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import RoverImageList from './components/roverimagelist/RoverImageList';
import { DatePicker ,  Spin } from 'antd';
import 'antd/dist/antd.css'; 
import './App.css';


const App = ()  => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('2017-06-03');
  const [loading, setLoading] = useState(true);



  function onHandleChange (value,dateString) {
    setDate(dateString)
    // setLoading(false)
    console.log(value)
   }


     
  

  useEffect( () => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=wI2lqTaushheU7bWvv9gPJgOLiH4TO84b9nl8DMl`)
      .then(res => {
        console.log(res)
        setData(res.data.photos)
         setLoading(false)
      })
      .catch( err => {
        console.log(err)
      })
  },[date])



 return (
   <div className='App'>
     <Navbar />
     <Header />
     <DatePicker 
     onChange={onHandleChange}
     className='datePicker'
     />
    
     {
      !loading ? <RoverImageList data ={data} /> :
        <Spin size='large'/> 
     }
      
    </div>
)
}
export default App;
