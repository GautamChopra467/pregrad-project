import React,{useEffect,useState} from "react";
import "../css/HomeBanner4Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Student1 from "../../../img/home-banner/student1.png";
import Student2 from "../../../img/home-banner/student2.jpg";
import Student3 from "../../../img/home-banner/student3.jpg";
import Student6 from "../../../img/home-banner/student6.jpg";
import Student5 from "../../../img/home-banner/student5.jpg";
import axios from "axios";

const HomeBanner4 = () => {

  const [testimonials,setTestimonials] = useState([])

  const getExtra = ()=>{
    axios.get(`http://localhost:8000/admin/showcources`).then(({data})=>{
      if(data){
        setTestimonials(data.data[0].testimonials);
      }
    })
  }

  useEffect(()=>{
    getExtra();
  },[])

  return (
    <div>
      <div className="main_container_homebanner4">
        <div className="main_top_section_homebanner4">
          <h2>Top Internship Opportunities</h2>
          <p>Get an opportunity to learn from industry leaders</p>
        </div>

        <div className="main_bottom_section_homebanner4">
       
<Swiper
slidesPerView={1.1}
spaceBetween={10}
breakpoints={{
    450 : {
        slidesPerView: 1.3,
        spaceBetween: 30
    },
    760: {
        slidesPerView: 1.5
    },
    1060: {
        slidesPerView: 2.2,
    },
    1260: {
      slidesPerView: 1.5,
    }
  }}
freeMode={true}
pagination={{
  clickable: true,
}}
modules={[FreeMode, Pagination]}
className="swiper_homebanner4"
>

{
(testimonials != undefined)
?
  testimonials.map((testimonial)=>(
    <SwiperSlide key={testimonial._id}>
  <div className="card_container_homebanner4">
    <div className="card_left_section_homebanner4">
      <img src={testimonial.image_link} alt="student1" />
    </div>

    <div className="card_right_section_homebanner4">
      <h3>
        {/* {testimonials.description} */}
        Pregrad managed my profile and helped me getting an
        internship taking proper care of all the process along with
        guiding me whenever needed
      </h3>
      <h2>{testimonial.name}</h2>
      <p>{testimonial.college_name}</p>
    </div>
  </div>
</SwiperSlide>
  ))
  :""
}

</Swiper>
 
        </div>
      </div>
    </div>
  );
};

export default HomeBanner4;
