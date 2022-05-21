import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import bg from '../../assets/images/bg.png'
 

const AppointmentBAnner = ({date,setDate}) => {
   
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} 
        
        className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist chair' />
    <div>
    <DayPicker 
     mode="single"
     selected={date}
     onSelect={setDate}
    
    />
    
    </div>
  </div>
  
</div>
    );
};

export default AppointmentBAnner;