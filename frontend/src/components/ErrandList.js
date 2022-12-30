import axios from "axios";
import {useEffect, useState} from "react";
import ErrandForm from "./ErrandForm";
import Errand from "./Errand";
import { toast } from "react-toastify";
import { URL } from "../App";
import loadImg from "../assets/loader.gif";

const ErrandList = () => {
  // States!~!
  const [errands, setErrands] = useState([])
  const [completedErrands, completedSetErrands] = useState([])
  const [isLoading, setIsLoading] = useState(false);

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
  
  // what do i want to do when i get errands from my database?
  const getErrands = async () => {
    setIsLoading(true);
    try {
      // the errands appear in array of data
      // so i want to destructure the data property
      const {data} = await axios.get(`${URL}/api/errands`);
      setErrands(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  }

  // giving this an empty dependency array because i want to it execute *only once*
  useEffect(() => {
    getErrands();
  }, [])

  const createErrand = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field can't be empty");
    }
    try {
      await axios.post(`${URL}/api/errands`, formData);
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
    { // when isLoading is true, display spinner
      isLoading && (
      <div class="--flex-center">
        <img src={loadImg} alt="load spinner"></img>
      </div>
    )}
    {
    !isLoading && errands.length === 0 ? (<p>"No errand found"</p>) : (errands.map((errand, index) => { // lets me receive props frm task cmpnt
        return (<Errand key={errand._id} errand={errand} index={index}/>)
    }))
    }
  </div>;
};

export default ErrandList;