import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
           
        }} 
        
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-105px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro labore! Laborum impedit cum adipisci assumenda accusamus, nihil cupiditate corrupti ullam dolor eveniet fugit! Distinctio suscipit error molestiae sed non.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
            
        </section>
       
    );
};

export default MakeAppointment;