import React, { useEffect, useState } from "react";
import "../../../components/admin/css/UserAdmin/CoursesAdminStyles.css";
import Student1 from "../../../img/home-banner/student1.png";
import { FaTrashAlt } from "react-icons/fa";
import { BsStarFill, BsStarHalf } from "react-icons/bs"; 

const CoursesAdmin = () => {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    imagelink: "",
    instructor: "",
    instructordetail: "",
    fee: "",
    rating: "",
    enrolled: "",
    courselink: ""
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setInfo({
      ...info,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(info));
    setIsSubmit(true);
  }

  const validate = (values) => {
    
    const errors = {};

    if(!values.name){
      errors.name = "Name required";
    }else if(values.name.length < 2){
      errors.name = "Minimum 2 characters required";
    }else if(values.name.length > 18){
      errors.name = "Maximum 18 characters required";
    }

    if(!values.imagelink){
        errors.imagelink = "Image link required"
    }

    if(!values.instructor){
      errors.instructor = "Instructor name required";
    }else if(values.instructor.length < 2){
      errors.instructor = "Minimum 2 characters required";
    }else if(values.instructor.length > 18){
      errors.instructor = "Maximum 18 characters required";
    }

    if(!values.instructordetail){
      errors.instructordetail = "Instructor detail required"
    }else if(values.instructordetail.length < 2){
      errors.instructordetail = "Minimum 2 characters required";
    }else if(values.instructordetail.length > 28){
      errors.instructordetail = "Maximum 28 characters required";
    }

    if(!values.rating){
      errors.rating = "Course rating required"
    }else if(values.rating < 1){
      errors.rating = "Rating should be greater than 1"
    }else if(values.rating > 5){
      errors.rating = "Rating should be less than 5"
    }

    if(!values.fee){
      errors.fee = "Course fee required"
    }

    if(!values.enrolled){
      errors.enrolled = "Students enrolled required"
    }

    if(!values.courselink){
      errors.courselink = "Course link required"
    }

    return errors;
  }

  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      console.log("Submitted")
    }
  }, [formErrors]);

  return (
    <div>
      <div className="main_box_coursesadmin">
        <div className="main_container_coursesadmin">
          <div className="top_section_coursesadmin">
            <h2>New Course</h2>
          </div>

          <div className="main_msg_coursesadmin">
            <p>Maximum limit reached, first delete previous courses to add a new one.</p>
          </div>

          <div className="mid_section_coursesadmin">
            <form>
              <div className="form_container_coursesadmin">
                <div className="form_box_coursesadmin">
                  <label>Name*</label>
                  <input type="text" name="name" value={info.name} onChange={handleForm} placeholder="Enter Course Name" />
                  <p className="errors_msg_coursesadmin">{formErrors.name}</p>
                </div>

                <div className="form_box_coursesadmin">
                  <label>Image Link*</label>
                  <input type="url" name="imagelink" value={info.imagelink} onChange={handleForm} placeholder="Enter Image Link" />
                  <p className="errors_msg_coursesadmin">{formErrors.imagelink}</p>
                </div>
                
                <div className="form_box_coursesadmin">
                  <label>Instructor Name*</label>
                  <input type="text" name="instructor" value={info.instructor} onChange={handleForm} placeholder="Enter Instructor Name" />
                  <p className="errors_msg_coursesadmin">{formErrors.instructor}</p>
                </div>

                <div className="form_box_coursesadmin">
                  <label>Instructor Detail*</label>
                  <input type="text" name="instructordetail" value={info.instructordetail} onChange={handleForm} placeholder="Enter Instructor Detail" />
                  <p className="errors_msg_coursesadmin">{formErrors.instructordetail}</p>
                </div>

                <div className="form_box_coursesadmin">
                  <label>Course Rating*</label>
                  <input type="number" name="rating" value={info.rating} onChange={handleForm} placeholder="Enter Course Rating" />
                  <p className="errors_msg_coursesadmin">{formErrors.rating}</p>
                </div>

                <div className="form_box_coursesadmin">
                  <label>Course Fee*</label>
                  <input type="number" name="fee" value={info.fee} onChange={handleForm} placeholder="Enter Course Fee" />
                  <p className="errors_msg_coursesadmin">{formErrors.fee}</p>
                </div>

                <div className="form_box_coursesadmin">
                  <label>Students Enrolled*</label>
                  <input type="number" name="enrolled" value={info.enrolled} onChange={handleForm} placeholder="Enter Students Enrolled" />
                  <p className="errors_msg_coursesadmin">{formErrors.enrolled}</p>
                </div>

                <div className="form_box_coursesadmin">
                  <label>Course Link*</label>
                  <input type="url" name="courselink" value={info.courselink} onChange={handleForm} placeholder="Enter Course Link" />
                  <p className="errors_msg_coursesadmin">{formErrors.courselink}</p>
                </div>

              </div>
            </form>
          </div>
          <div className="bottom_section_coursesadmin">
            <button
              onClick={submitForm}
              className="btn_primary_coursesadmin"
            >
              Post Course
            </button>
          </div>
        </div>

        <div className="main_container_coursesadmin">
          <div className="top_section_coursesadmin">
            <h2>Previous Courses</h2>
          </div>

          <div className="testimonial_container_coursesadmin">
            <a href="www.google.com" target="_blank">
             <div className="testimonial_box_coursesadmin">
              <div className="testimonial_box_upper_section_coursesadmin">
                <img src={Student1} alt="testimonial" />
                <div className="testimonial_details_coursesadmin">
                  <h2>The Complete 2022 Web Development BootcampBecome a Full-Stack Web Developer.</h2>
                  <h3>Dr. Angela Yu, AWS Expert</h3>
                  <div className="course_info_coursesadmin">
                    <p>4.7</p>
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarHalf className="star_icon_courseadmin" />
                    <h6>(138,476)</h6>
                  </div>
                  <p>&#8377; 790</p>
                </div>
              </div>
              <div className="testimonial_box_bottom_section_coursesadmin">
                <button className="btn_delete_coursesadmin">
                  <FaTrashAlt classNmae="delete_icon_coursesadmin" />
                  Delete
                </button>
              </div>
            </div>    
              </a>


            <div className="testimonial_box_coursesadmin">
              <div className="testimonial_box_upper_section_coursesadmin">
                <img src={Student1} alt="testimonial" />
                <div className="testimonial_details_coursesadmin">
                  <h2>The Complete 2022 Web Development BootcampBecome a Full-Stack Web Developer.</h2>
                  <h3>Dr. Angela Yu, AWS Expert</h3>
                  <div className="course_info_coursesadmin">
                    <p>4.7</p>
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarFill className="star_icon_courseadmin" />
                    <BsStarHalf className="star_icon_courseadmin" />
                    <h6>(138,476)</h6>
                  </div>
                  <p>&#8377; 790</p>
                </div>
              </div>
              <div className="testimonial_box_bottom_section_coursesadmin">
                <button className="btn_delete_coursesadmin">
                  <FaTrashAlt classNmae="delete_icon_coursesadmin" />
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAdmin;
