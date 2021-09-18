
import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/header/header";
import MainPage from "./components/main_page/main";
function App() {
  /* const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    action().then((res) => {
      console.log(res);
      setItems(res.data.results);
      setLoading(false);
      return res;
    });
  }, []);
  console.log(items);
  const array = items.map((hero, index) => {
    return hero;
  }); */
  return (
    <Fragment>
      <Header />
      <MainPage />
    </Fragment>
  );
}
export default App;
