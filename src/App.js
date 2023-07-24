import './style/style.css';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Photos from "./components/Photos";


function App() {
  return (
    <div className="container">
      <Header />

      <div className="main__container">
        <Profile />
        <Photos />
      </div>
    </div>
  );
}

export default App;
