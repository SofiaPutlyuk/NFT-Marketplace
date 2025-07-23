import "./scss/main.scss";
import { Header } from './components/MainPage/Header/Header';
import { Banner } from "./components/MainPage/Banner/Banner";
function App() {
  return (
     <div className="container">
      <Header />
   
      <Banner />
    </div>
  
  );
}

export default App;
