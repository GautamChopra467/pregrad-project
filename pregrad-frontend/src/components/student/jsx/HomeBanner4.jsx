import React from "react";
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


const HomeBanner4 = () => {
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
            <SwiperSlide>
              <div className="card_container_homebanner4">
                <div className="card_left_section_homebanner4">
                  <img src={Student1} alt="student1" />
                </div>

                <div className="card_right_section_homebanner4">
                  <h3>
                    Pregrad managed my profile and helped me getting an
                    internship taking proper care of all the process along with
                    guiding me whenever needed
                  </h3>
                  <h2>DIBYANSHU PRANJAL</h2>
                  <p>IIT INDORE</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card_container_homebanner4">
                <div className="card_left_section_homebanner4">
                  <img src={Student2} alt="student1" />
                </div>

                <div className="card_right_section_homebanner4">
                  <h3>
                  We all know how tedious finding an internship is, but Pregrad made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews
                  </h3>
                  <h2>PRIYAL DUBEY</h2>
                  <p>BVCOE DELHI</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card_container_homebanner4">
                <div className="card_left_section_homebanner4">
                  <img src={Student3} alt="student3" />
                </div>

                <div className="card_right_section_homebanner4">
                  <h3>
                  Though the journey from applying for an internship to getting selected is quite exhausting but the Pregrad Team made the whole process smooth by always being available for any issues and proper guidance.
                  </h3>
                  <h2>PALLAVI UPADHYAY</h2>
                  <p>MSIT DELHI</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card_container_homebanner4">
                <div className="card_left_section_homebanner4">
                  <img src={Student5} alt="student5" />
                </div>

                <div className="card_right_section_homebanner4">
                  <h3>
                  When I wanted to do internships, I was baffled on where to start. Thanks to Pregrad from where I was able to find offers right at my table.
                  </h3>
                  <h2>T S AJEET</h2>
                  <p>NIT TRICHY</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card_container_homebanner4">
                <div className="card_left_section_homebanner4">
                  <img src={Student6} alt="student6" />
                </div>

                <div className="card_right_section_homebanner4">
                  <h3>
                  My experience with Pregrad is unique and highly enriching, something | would definitely recommend all aspirants to try.
                  </h3>
                  <h2>ARCHISMAN PATHAK</h2>
                  <p>NIT MUMBAI</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner4;
