import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="regisForm">
      <div class="title">Student Registeration Form</div>
      <form>
        <div>Firstname:</div>
        <div>
          <input
            type="text"
            placeholder="Firstname"
          />
        </div>
        <br />
        <div>Middlename:</div>
        <div>
          <input
            type="text"
            placeholder="Middlename"
          />
        </div>
        <br />
        <div>Lastname:</div>
        <div>
          <input
            type="text"
            placeholder="Lastname"
          />
        </div>
        <br />
        <div>
          <label>Course: </label>
          <select>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
          </select>
        </div>
        <br />
        <div>Gender:</div>
        <input
          type="radio"
          name="gender"
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
        />
        <label>Female</label>
        <br />
        <br />
        <div>Phone:</div>
        <div>
          <input
            class="phoneinput"
            type="tel"
            value="+84"
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            placeholder="phone no"
          />
        </div>
        <br />
        <div>Current Address:</div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Current address"
          ></textarea>
        </div>
        <br />
        <div class="fontbold">Email:</div>
        <div>
          <input
            type="email"
            placeholder="Enter email"
          />
        </div>
        <br />
        <div class="fontbold">Password:</div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <br />
        <div class="fontbold">Retype Password:</div>
        <div>
          <input
            type="password"
            placeholder="Retype Password"
          />
        </div>
        <br />
        <button class="registerBtn">Register</button>
      </form>
      <script src="js/app.js"></script>
    </div>
  );
}

export default App;
