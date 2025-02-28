import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OrchidCard from "./components/OrchidCard";
import { orchidList } from "./types/ListOfOrchids";
function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center bg-green-100">
        {orchidList.map((objInList) => (
          <OrchidCard key={objInList.id} {...objInList} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
