import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa";

const errand = () => {
  return (
    <div>
        <h2>errand</h2>
    </div>
  )
}

const Errand = ({errand, index}) => {
  return (
    <div className="errand">
      <p>
        <b>{index + 1}. </b>
        {errand.name}
      </p>
      <div className="errand-icons">
        <FaCheckDouble color="green"/>
        <FaEdit color="purple"/>
        <FaRegTrashAlt color="red"/>
      </div>
    </div>
  )
}

export default Errand;