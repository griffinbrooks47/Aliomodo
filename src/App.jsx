import { useState } from 'react';
import './fonts.css';
import './App.css';
import { Navbar } from "./components/Navbar";
import { SubNavBar} from "./components/SubNavBar";
import { StocksList } from "./components/StocksList";

function App() {
  const sampleData = {
    "Alphabet":{"price":101.03, "ticker":"GOOG"},
    "Microsoft":{"price":275.23, "ticker":"MSFT"},
    "Bitcoin":{"price":27307.50, "ticker":"BTC"},
    "Ethereum":{"price":1778.59, "ticker":"ETH"}
  };
  return (
    <main className="App">
      <Navbar />
      <SubNavBar />
      <section class="stocks-section">
        <StocksList />
      </section>
    </main>
  )
}

export default App
