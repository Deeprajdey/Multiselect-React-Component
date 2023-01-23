import "./App.css";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import data from "./constants/data";
import groupData from "./constants/groupData";
function App() {
  return (
    <div className="App">
      <MultiSelect data={data} group={groupData} />
    </div>
  );
}

export default App;
