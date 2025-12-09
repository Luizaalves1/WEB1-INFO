import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <main>
        <h1>Catálogo de Produtos</h1>
      </main>
    </>
  )
}

export default App
