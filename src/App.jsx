import './App.css';
import { MyRoutes } from './Router/MyRoutes';
import {Navbar} from "./organism/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <MyRoutes/>
    </div>
  );
}

export default App;
