import React from "react";
import HeaderUser from "../components/jsx/HeaderUser";
import "../components/css/DetailsOneStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import { useState } from "react";

const DetailsOne = () => {

  const domainsData = ["Front-End" , "Back-End", "Full Stack Software", "Mobile Engineering", "Product Management", "Data Scientist", "BUSINESS OPERATIONS", "MARKETING", "SALES AND BUSINESS DEVELOPMENT", "MEDIA, COMMUNICATIONS, PUBLIC RELATIONS", "DATA ANALYTICS", "FINANCE", "ARTS AND DESIGN", "DATABASE ADMINISTRATION", "EVENT PLANNING", "ECONOMICS AND POLICY"]

  const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
  }

  const  options  = [
    { label:  '', value:  'option_1'  },
    { label:  'Front-End', value:  'Front-End'  },
    { label:  'Back-End', value:  'Back-End'  },
    { label:  'Full Stack Software', value:  'Full Stack Software'  },
  ]


  return (
    <div>
      <HeaderUser />
      <div className="main_detailsOne">
        <div className="greeting_container_detailsOne">
          <div className="greeting_box_detailsOne">
            <div className="greeting_left_section_detailsOne">
              <h4>Welcome to Pregrad</h4>
              <p><span>Gautam, </span> build your profile to join our community.</p>
            </div>

            <div className="greeting_right_section_detailsOne">
              <button className="btn_primary_detailsOne">Submit <BsArrowRightShort size={27} style={{ color: '#fff' }} />
              </button>
            </div>
          </div>
        </div>

        <div className="form_container_detailsOne">
          <form>
            <div className="form_main_box_detailsOne">
              <div className="form_box_detailsOne box1_detailsOne">
                <label className="label_detailsOne">Q. College / University name?</label>
                <select className="select_detailsOne">
                  <option value="other">Enter College Name</option> 
                </select>
              </div>

              <div className="form_box_detailsOne box2_detailsOne">
                <label className="label_detailsOne">Q. Year of graduation ?</label>
                <select className="select_detailsOne">
                  <option value="other">Enter Graduation Year</option> 
                </select>
              </div>

              <div className="form_box_detailsOne box3_detailsOne">
                <label className="label_detailsOne">Q. Which domain are you interested in working?</label>
                {/* <select className="select_detailsOne">
                  <option value="other">Enter Domain</option> 
                </select> */}
                {/* <Multiselect
                options={jobOptions} 
                selectedValues={this.state.selectedValue} 
                onSelect={this.onSelect} 
                onRemove={this.onRemove} 
                displayValue="name"  
               />  */}
                <h4>Values</h4>
        {value}

      <MultiSelect
      closeOnSelect="false"
        onChange={handleOnchange}
        options={options}
        
      />
              </div>

              <div className="form_box_detailsOne box4_detailsOne">
                <label className="label_detailsOne">Q. Which type of job would you like?</label>
                
              </div>

              <div className="form_box_detailsOne box5_detailsOne">
                <label className="label_detailsOne">Q. What locations do you want to work in?</label>
                <select className="select_detailsOne">
                  <option value="other">Enter Locations </option> 
                </select>
              </div>
            </div>
          </form>

          <button className="btn_primary_detailsOne">Submit <BsArrowRightShort size={27} style={{ color: '#fff' }} />
              </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsOne;
