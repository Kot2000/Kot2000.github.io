import './App.css';
import { Navbar, NavbarItem } from './components/Navbar';
import PageController from './components/Page-Controller';

function App() {
  return (
    <div className="App">
      <Navbar className='App-Navigation-Bar'>
        <NavbarItem name="HOME" goto="/" />
        <NavbarItem name="APPS" goto="/apps" />
        <NavbarItem name="CONTACT" goto="/contact" />
      </Navbar>
      <div className="PageControllerParent">
        <PageController />
      </div>
    </div>
  );
}

export default App;
