import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDoForm from './components/AddToDoForm';
function App() {
  return (
    <div className="container">
      <ToDo/>
    </div>
  );
}

export default App;
