import axios from "axios";
import {useEffect, useState} from "react";
import ErrandForm from "./ErrandForm";
import Errand from "./Errand";
import { toast } from "react-toastify";

const ErrandList = () => {
    const [formData, setFormData] = useState({
      name: "",
      completed: false
    });
    const {name} = formData;

    // this e gets the events.target property
    // for this particular form
    const handleInputChange = (e) => {
      // events.target has both name and value property
      // here i am destructuring it out and assigning it
      const {name, value} = e.target;
      // "..." grab all form data using spread operator
      // set name to be the value entered by the user
      setFormData({ ...formData, [name]: value});
      // completing the const{name} and const handleInputChange allows me to pass this as a prop to ErrandForm
    };
    
    const createErrand = async (e) => {
      e.preventDefault();
      if (name === "") {
        return toast.error("Input field can't be empty");
      }
      try {
        await axios.post("http://localhost:5000/api/errands", formData);
        toast.success("Errand added!");
        // this is an object, use object syntax
        setFormData({...formData, name: ""});
      } catch (error) {
        toast.error(error.message);
      }
    };

  return <div>
    <h2>Errand Manager</h2>
    <ErrandForm name={name} handleInputChange={handleInputChange} createErrand={createErrand}/>
    <div className="--flex-between --pb">
      <p>
        <b>Total Errands: </b>0
      </p>
      <p>
        <b>Completed Errands: </b>0
      </p>
    </div>
    <hr/>
    <Errand/>
  </div>;
};

export default ErrandList;