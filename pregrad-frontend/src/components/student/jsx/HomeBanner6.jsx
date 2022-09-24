import React, { useState, useRef,useEffect } from "react";
import "../css/HomeBanner6Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Student1 from "../../../img/home-banner/student1.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs"; 
import axios from "axios";

const HomeBanner6 = () => {
  const flag = true;


  const [cources,setCources] = useState([]);

  const getExtra = ()=>{
    axios.get(`http://localhost:8000/admin/showcources`).then(({data})=>{
      if(data){
        setCources(data.data[0].cources);
      }
    })
  }

  useEffect(()=>{
    getExtra();
  },[])

  return (
    <div>
      <div className="main_container_homebanner6">
        <div className="main_top_section_homebanner6">
          <h2>Join Now </h2>
          <div className="main_top_lower_section_homebanner6">
            <p>Events</p>
          </div>
        </div>

        <div className="main_bottom_section_homebanner6">
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

           (cources != undefined)?cources.map((cource)=>(
            <SwiperSlide className="swiper_homebanner6" key={cource._id}>
          <a href={cource.courcelink} target="_blank">
             <div className="course_box_homebanner6">
              <div className="course_box_upper_section_homebanner6">
                <img src={cource.imagelink} alt="course" />
                <div className="course_details_homebanner6">
                  <h2>{cource.name}</h2>
                  <h3>{cource.instructor}, {cource.instructordetail}</h3>
                  <div className="course_info_homebanner6">
                    <p>{cource.rating}</p>
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarHalf className="star_icon_courseadmin" />
                    <h6>({cource.enrolled})</h6>
                  </div>
                  <p>&#8377; {cource.fee}</p>
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

export default HomeBanner6;
