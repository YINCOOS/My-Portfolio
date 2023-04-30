import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../Assets/avatar1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Ernest Achiever',
        review: 'I recently worked with Adeyinka on a project and I couldn\'t be more satisfied with the outcome. His team has a great communication throughout the entire process and were very responsive to my needs and requests.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Engr. Samson',
        review: 'Adeyinka have a great understanding of software development and took the time to explain their processes and solutions. The final product was delivered on time and met all of my expectations.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Phiona felix',
        review: 'I would highly recommend this guy to anyone or organization looking for a professional and reliable solution.'
    },
]


const Testimonial = () => {
  return (
   <section id="Testimonial">
         <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                 // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}

                pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index)=>{
                        return(
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt="client" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
   </section>
  )
}

export default Testimonial
