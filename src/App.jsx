import { useState } from "react";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </div>
  );
};
export default App;
