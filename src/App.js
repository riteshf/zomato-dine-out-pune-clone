import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Options from "./components/Options/Options";
import Restaurants from "./components/Restaurants/Restaurants";

import breadcrums from "./data/breadcrums.json";
import options from "./data/options.json";
import restaurants from "./data/restaurants.json";
function App() {
  const [data, setData] = useState(restaurants.data);

  const handleSearchFilter = (searchString = "") => {
    let newData = data.filter((r) =>
      r.name.toLowerCase().contains(searchString.toLowerCase())
    );
    setData(newData);
  };

  return (
    <div>
      {/* Code here */}
      <Navbar breadcrums={breadcrums} handleSearchFilter={handleSearchFilter} />
      <Options options={options.data} />
      <Restaurants restaurants={data} />
    </div>
  );
}

export default App;
