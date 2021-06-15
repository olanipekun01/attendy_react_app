import './App.css';
import Header from "./layout/Header"
import SideBar from "./layout/SideBar"
import Hero from "./component/Hero"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SideBar />
    </div>
  );
}

export default App;
