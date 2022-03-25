import React, { useState } from "react";
import "./styles.css";

var foodDict = {
  Indian: [
    {
      name: "chicken biryani",
      rating: "5/5"
    },
    {
      name: "paneer tikka",
      rating: "4/5"
    },
    {
      name: "pani puri",
      rating: "4.5/5"
    },
    {
      name: "vegterian",
      rating: "5/5"
    }
  ],
  Chinese: [
    {
      name: "Dumplings",
      rating: "4.5/5"
    },
    {
      name: "Chow mein",
      rating: "4/5"
    },
    {
      name: "Szechwan Chilli Chicken",
      rating: "3.5/5"
    },
    {
      name: "Mushroom Manchurian Recipe",
      rating: "4/5"
    }
  ],
  American: [
    {
      name: "S'mores",
      rating: "5/5"
    },
    {
      name: "Chicken and Waffles",
      rating: "4.5/5"
    },
    {
      name: "Hot Dogs",
      rating: "4/5"
    },
    {
      name: "Apple Pie",
      rating: "3/5"
    }
  ]
};
var foodWeKnow = Object.keys(foodDict);

export default function App() {
  const [list, setList] = useState([]);
  function clickEventHandler(item) {
    setList(foodDict[item]);
  }

  return (
    <div className="App">
      <h1>Food Recommendation</h1>
      <p>Check out some of my Food recommendations.</p>
      <div id="listItems">
        {foodWeKnow.map((item, index) => {
          return (
            <span key={index} onClick={() => clickEventHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
      <hr />
      <div id="secondDiv">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <div>{item.name} </div>
                <div>{item.rating} rating</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
