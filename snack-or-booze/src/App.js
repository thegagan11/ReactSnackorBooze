import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import ItemDetail from "./FoodItem";
import NewItemForm from "./NewItemForm"; // Include NewItemForm for adding items

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacksAndDrinks() {
      try {
        let snacksResponse = await SnackOrBoozeApi.getSnacks();
        console.log("Snacks:", snacksResponse); // Debugging log
        let drinksResponse = await SnackOrBoozeApi.getDrinks();
        console.log("Drinks:", drinksResponse); // Debugging log

        setSnacks(snacksResponse);
        setDrinks(drinksResponse);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally, set isLoading to false here to show an error message instead of a loading screen
      }
    }

    getSnacksAndDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <ItemDetail items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <ItemDetail items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add-snack">
              <NewItemForm type="snacks" />
            </Route>
            <Route path="/add-drink">
              <NewItemForm type="drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
