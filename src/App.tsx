import "./App.css";
import OrchidCard from "./components/OrchidCard";
import { orchidList } from "./types/ListOfOrchids";

function App() {
  return (
    <div className="flex flex-wrap bg-green-100">
      {orchidList.map((objInList) => (
        <OrchidCard {...objInList} />
      ))}
    </div>
  );
}

export default App;
