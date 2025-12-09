import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import SearchBar from "./components/SearchBar";
import { useSearch } from "./hooks/useSearch";
import Navbar from "./components/NavBar";
import './App.css';

const ITEMS_PER_PAGE = 8;

function App() {
  const [products, setProducts]    = useState([]);
  const [visibleCount, setVisible] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading]      = useState(true);
  const [error, setError]          = useState(null);
  const { query, setQuery, filtered } = useSearch(products);

  // 1. Buscar produtos
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setError('Erro ao carregar produtos.'))
      .finally(() => setLoading(false));
  }, []);

  // 2. Paginar +8 a cada clique, prev é o valor anterior
  const handleLoadMore = () =>
    setVisible((prev) => prev + ITEMS_PER_PAGE);

  // 3. Renderização
  return (
    <main>
      { /*... código existente */ }
      {products && (
        <>
          <SearchBar value={query} onChange={setQuery} />
          <ProductList products={filtered.slice(0, visibleCount)} />

          <Button
            onClick={handleLoadMore}
            disabled={visibleCount >= filtered.length}
          >
            {visibleCount >= filtered.length
              ? "Fim dos produtos"
              : "Carregar Mais"}
          </Button>
        </>
      )}
    </main>
  );
}

export default App;