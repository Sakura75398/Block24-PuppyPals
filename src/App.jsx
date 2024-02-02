import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("Component now rendering...");
  console.log(featPupId);

  console.log("puppyList: ", puppyList);
console.log(puppies);
  const featuredPup = puppyList.find((pup) => pup.id === featPupId);
console.log(featuredPup);
  

  return (
    <div className="App">
      {
    featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )
  }
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              console.log("puppy id: ", puppy.id);
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
