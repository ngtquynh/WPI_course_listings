// import { Link } from "react-router-dom"; // useNavigate removed
import { useNavigate } from "react-router-dom";
import './Home.css'
const HomePage = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate('/courses');
  }
  return (
    <>
      <h1>Course listing Demo</h1>
      <p>Homepage </p>
      <button onClick={navigateHandler}>Go</button>
    </>
  );
};
export default HomePage;
