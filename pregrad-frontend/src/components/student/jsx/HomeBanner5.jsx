import React, { useState, useEffect } from "react";
import "../css/HomeBanner5Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Student1 from "../../../img/home-banner/student1.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs"; 
import axios from "axios";

const HomeBanner5 = () => {
  const flag = true;

  const [events,setEvents] = useState([]);

  const getExtra = ()=>{
    axios.get(`http://localhost:8000/admin/showcources`).then(({data})=>{
      if(data){
        setEvents(data.data[0].events);
    
      }
    })
  }

 useEffect(()=>{
  getExtra();
 },[])

  return (
    <div>
      <div className="main_container_homebanner5">
        <div className="main_top_section_homebanner5">
          <h2>Upskill and get hired </h2>
          <div className="main_top_lower_section_homebanner5">
            <p>Courses</p>
            <button className="btn_primary_homebanner5">All Courses</button>
          </div>
        </div>

        <div className="main_bottom_section_homebanner5">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              460: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              658: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            loop={flag ? false : true}
            className="mySwiper"
          >
          
              {

                  (events != undefined)?events.map((event)=>(
                    <SwiperSlide className="swiper_homebanner5" key={event._id}>
                    <a href={event.eventlink} target="_blank">
                    <div className="course_box_homebanner5">
                     <div className="course_box_upper_section_homebanner5">
                       <img src={event.imagelink} alt="course" />
                       <div className="course_details_homebanner5">
                         <h2>{event.name}</h2>
                         <h3>{event.speaker}, {event.organisation}</h3>
                         <div className="course_info_homebanner5">
                           <p>{event.date} | {event.time}</p>
                           {/* <BsStarFill className="star_icon_courseadmin" />
                           <BsStarFill className="star_icon_courseadmin" />
                           <BsStarFill className="star_icon_courseadmin" />
                           <BsStarFill className="star_icon_courseadmin" />
                           <BsStarHalf className="star_icon_courseadmin" /> */}
                           {/* <h6>(138,476)</h6> */}
                         </div>
                         {/* <p>&#8377; 790</p> */}
                       </div>
                     </div>
                   </div>    
                     </a>
                     </SwiperSlide>
                  )):""

              }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner5;
