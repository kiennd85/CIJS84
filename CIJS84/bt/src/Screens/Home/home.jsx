import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <div>
      <div className="container">
        <div style={{ fontSize: '1.5rem', padding: '10px' }}>Các bài thực hành</div>
        <div>
          <div className="box">
            <Link
              className="link"
              to="/Light"
            >
              Light Traffic
            </Link>
          </div>
          <div className="box">
            <Link
              className="link"
              to="/Register"
            >
              Register Form
            </Link>
          </div>
          <div className="box">
            <Link
              className="link"
              to="/CountNumber"
            >
              Count Number
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
