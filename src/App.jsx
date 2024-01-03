import { useState } from "react";
import { puppyList } from './data.js';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("Component now rendering...")
  console.log(featPupId);

  console.log("puppyList: ", puppyList);
  
  return (
    <div className="App">
      {featPupId && <p>Featured Pup Id: {featPupId}</p>}
      {puppies.map((puppy) => {
        return (
        <p onClick={handleClick} key={puppy.id}>
          {puppy.name}
        </p>
      );
    })}+
  </div>
);
}

export default App
