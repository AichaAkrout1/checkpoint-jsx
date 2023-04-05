import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profilephoto from './components/profile/Profilephoto';
import Fullname from './components/profile/Fullname';
import Adresse from './components/profile/Adresse';


function App() {
  return (
    <div className='Card'>
    <Profilephoto/>
    <Fullname/>
    <Adresse/>
    </div>
  );
}

export default App;
