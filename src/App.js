import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Card imageShow={false} />

          <Card titleIndex={'bottom'} />
        </div>
        <div className="col-6">
          <Card titleIndex={'right'} />

          <Card titleIndex={'top'} />
        </div>
      </div>
    </div>
  );
}

export default App;
