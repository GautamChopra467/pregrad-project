import React, { useEffect, useState } from "react";
import "../../../components/admin/css/UserAdmin/EventsAdminStyles.css";
import Student1 from "../../../img/home-banner/student1.png";
import { FaTrashAlt } from "react-icons/fa";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const EventsAdmin = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    imagelink: "",
    speaker: "",
    organisation: "",
    date: "",
    time: "",
    eventlink: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(info));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name required";
    } else if (values.name.length < 2) {
      errors.name = "Minimum 2 characters required";
    } else if (values.name.length > 18) {
      errors.name = "Maximum 18 characters required";
    }

    if (!values.imagelink) {
      errors.imagelink = "Image link required";
    }

    if (!values.speaker) {
      errors.speaker = "Speaker name required";
    } else if (values.speaker.length < 2) {
      errors.speaker = "Minimum 2 characters required";
    } else if (values.speaker.length > 18) {
      errors.speaker = "Maximum 18 characters required";
    }

    if (!values.organisation) {
      errors.organisation = "Organisation name required";
    } else if (values.organisation.length < 2) {
      errors.organisation = "Minimum 2 characters required";
    } else if (values.organisation.length > 28) {
      errors.organisation = "Maximum 28 characters required";
    }

    if (!values.date) {
      errors.date = "Date of event required";
    }

    if (!values.time) {
      errors.time = "Time of event required";
    }

    if (!values.eventlink) {
      errors.eventlink = "Event link required";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Submitted");
    }
  }, [formErrors]);

  return (
    <div>
      <div className="main_box_eventsadmin">
        <div className="main_container_eventsadmin">
          <div className="top_section_eventsadmin">
            <h2>New Event</h2>
          </div>

          <div className="main_msg_eventsadmin">
            <p>Maximum limit reached, first delete previous events to add a new one.</p>
          </div>

          <div className="mid_section_eventsadmin">
            <form>
              <div className="form_container_eventsadmin">
                <div className="form_box_eventsadmin">
                  <label>Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={handleForm}
                    placeholder="Enter Course Name"
                  />
                  <p className="errors_msg_eventsadmin">{formErrors.name}</p>
                </div>

                <div className="form_box_eventsadmin">
                  <label>Image Link*</label>
                  <input
                    type="url"
                    name="imagelink"
                    value={info.imagelink}
                    onChange={handleForm}
                    placeholder="Enter Image Link"
                  />
                  <p className="errors_msg_eventsadmin">
                    {formErrors.imagelink}
                  </p>
                </div>

                <div className="form_box_eventsadmin">
                  <label>Speaker Name*</label>
                  <input
                    type="text"
                    name="speaker"
                    value={info.speaker}
                    onChange={handleForm}
                    placeholder="Enter Speaker Name"
                  />
                  <p className="errors_msg_eventsadmin">{formErrors.speaker}</p>
                </div>

                <div className="form_box_eventsadmin">
                  <label>Organisation Name*</label>
                  <input
                    type="text"
                    name="organisation"
                    value={info.organisation}
                    onChange={handleForm}
                    placeholder="Enter Organisation Name"
                  />
                  <p className="errors_msg_eventsadmin">
                    {formErrors.organisation}
                  </p>
                </div>

                <div className="form_box_eventsadmin">
                  <label>Event Date*</label>
                  <input
                    type="date"
                    name="date"
                    value={info.date}
                    onChange={handleForm}
                    placeholder="Enter Event Date"
                  />
                  <p className="errors_msg_eventsadmin">{formErrors.date}</p>
                </div>

                <div className="form_box_eventsadmin">
                  <label>Event Time*</label>
                  <input
                    type="time"
                    name="time"
                    value={info.time}
                    onChange={handleForm}
                    placeholder="Enter Event Time"
                  />
                  <p className="errors_msg_eventsadmin">{formErrors.time}</p>
                </div>

                <div className="form_box_eventsadmin">
                  <label>Event Link*</label>
                  <input
                    type="url"
                    name="eventlink"
                    value={info.eventlink}
                    onChange={handleForm}
                    placeholder="Enter Event Link"
                  />
                  <p className="errors_msg_eventsadmin">
                    {formErrors.eventlink}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="bottom_section_eventsadmin">
            <button onClick={submitForm} className="btn_primary_eventsadmin">
              Post Course
            </button>
          </div>
        </div>

        <div className="main_container_eventsadmin">
          <div className="top_section_eventsadmin">
            <h2>Previous Events</h2>
          </div>

          <div className="testimonial_container_eventsadmin">
            <a href="https://www.google.com" target="_blank">
              <div className="testimonial_box_eventsadmin">
                <div className="testimonial_box_upper_section_eventsadmin">
                  <img src={Student1} alt="testimonial" />
                  <div className="testimonial_details_eventsadmin">
                    <h2>Women and Leadership</h2>
                    <h3>Dr. Angela Yu, AWS Expert</h3>
                    <p>Sep 21, 2022 - 8:00</p>
                  </div>
                </div>
                <div className="testimonial_box_bottom_section_eventsadmin">
                  <button className="btn_delete_eventsadmin">
                    <FaTrashAlt classNmae="delete_icon_eventsadmin" />
                    Delete
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAdmin;
