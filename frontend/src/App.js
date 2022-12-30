import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrandList from "./components/ErrandList";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="app">
      <div className="errand-container">
        <ErrandList/>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;