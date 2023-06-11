import { Link } from 'react-router-dom';
import './home.css';
const styleLink = { textDecoration: 'none', color: 'black' };
const stylePracticeTitle = { color: 'blue' };
const Home = () => {
  return (
    <div>
      <div className="container">
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Các bài thực hành React</div>
        <div>
          <div className="box">
            <Link
              className="link"
              to="/Light"
              style={styleLink}
            >
              <div>Sesson 5: useState </div>
              <div style={stylePracticeTitle}>Light Traffic</div>
            </Link>
          </div>
          <div className="box">
            <Link
              className="link"
              to="/CountNumber"
              style={styleLink}
            >
              <div>Sesson 5: useState </div>
              <div style={stylePracticeTitle}>Count Number</div>
            </Link>
          </div>
          <div className="box">
            <Link
              className="link"
              to="/Register"
              style={styleLink}
            >
              <div>Sesson 5: useState </div>
              <div style={stylePracticeTitle}>Register Form</div>
            </Link>
          </div>

          <div className="box">
            <Link
              className="link"
              to="/SearchForm"
              style={styleLink}
            >
              <div>Sesson 8: useEffect </div>
              <div style={stylePracticeTitle}>Search</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
