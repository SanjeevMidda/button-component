import "./index.css";
import Button from "./components/Button";
import Lip from "./components/Lip";
import { useState } from "react";

function App() {
  const [lipText, setLipText] = useState("");

  return (
    <div className="App">
      <div className="buttonContainer">
        <Button text="one" color="blue" lipText={() => setLipText("ONE")} />
        <Button text="two" color="red" lipText={() => setLipText("TWO")} />
        <Button
          text="three"
          color="green"
          lipText={() => setLipText("THREE")}
        />
        <Button text="four" color="pink" lipText={() => setLipText("FOUR")} />
        <Button text="five" color="purple" lipText={() => setLipText("FIVE")} />
      </div>

      <Lip text={lipText} />
    </div>
  );
}

export default App;
