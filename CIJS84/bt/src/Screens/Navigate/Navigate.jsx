import { Route, Routes } from 'react-router-dom';
import Home from '../Home/home';
import Light from '../Lesson5/Light';
import Register from '../Lesson7/RegisterForm';
import CountNumber from '../Lesson5/CountNumber';
import SearchForm from '../Lesson8_useEffect/SearchForm';
import App1 from '../Thuchanh/useEffect/prac_useEffect';

import AppBacktotop from '../Thuchanh/useEffect/BacktoTop';

const Navigate = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Light"
          element={<Light />}
        />
        <Route
          path="/Register"
          element={<Register />}
        />
        <Route
          path="/CountNumber"
          element={<CountNumber />}
        />
        <Route
          path="/SearchForm"
          element={<SearchForm />}
        />
        />
        <Route
          path="/ThuchanhUseEffect"
          element={<App1 />}
        />
        <Route
          path="/ThuchanhBacktoTop"
          element={<AppBacktotop />}
        />
        {/* <Route
          path="*"
          element={<p>khong tim thay</p>}
        /> */}
      </Routes>
    </div>
  );
};

export default Navigate;
