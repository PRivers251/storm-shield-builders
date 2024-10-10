"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../../styles/homePage.css'; //custom styles

export default function Cards(){
    return (
        <section className="cardSection flex justify-center p-10">

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1} //Show one card at a time on mobile
                breakpoints={{
                    640: {
                        slidesPerView: 2, // Show two cards on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // Show three cards on desktop
                    },
                }}
                navigation 
                pagination={{ clickable: true }}
                >
                    <SwiperSlide className='card bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2'>
                        <div className='text-lg font-medium'>Card 1</div>
                    </SwiperSlide>
                    <SwiperSlide className='card bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2'>
                        <div className='text-lg font-medium'>Card 2</div>
                    </SwiperSlide>
                    <SwiperSlide className='card bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-2'>
                        <div className='text-lg font-medium'>Card 3</div>
                    </SwiperSlide>
                </Swiper>
        </section>
    );
};