import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer"; 
import "./styles.css";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container" style={{ marginTop: "40px" }}>
        <SearchBar />
      </main>
      <Footer /> 
    </div>
  );
}
