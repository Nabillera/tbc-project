import './App.css';
import AboutUs from './components/AboutUs';
import CourseList from './components/CourseList';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectPartners from './components/ProjectPartners';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <CourseList/>
      <ProjectPartners/>
    </div>
  );
}

export default App;
