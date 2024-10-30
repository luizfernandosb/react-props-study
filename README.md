# Filterable Product Table

Um projeto simples em React que demonstra como criar uma tabela filtrável de produtos, onde é possível buscar por nome e filtrar produtos em estoque.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript**: Linguagem de programação utilizada para a lógica do aplicativo.
- **HTML**: Estrutura básica das páginas.
- **CSS**: Estilização da interface.

## Estrutura do Projeto

O projeto é composto por vários componentes que trabalham juntos para fornecer a funcionalidade desejada:

### 1. `App`
O componente principal que renderiza o componente `FilterableProductTable`

```javascript
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <FilterableProductTable />
    </div>
  );
}

export default App; 
```

### 2. `FilterableProductTable`
Gerencia o estado dos produtos e a lógica de filtragem. Este componente contém o SearchBar e o ProductTable.

```javascript
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSearch, setIsSearch] = useState("");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (e) => {
    setIsSearch(e.target.value);
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "#fafafa", borderRadius: "8px" }}>
      <SearchBar
        checked={isChecked}
        onChange={handleCheckboxChange}
        value={isSearch}
        onInputChange={handleInputChange}
      />
      <ProductTable checked={isChecked} value={isSearch} />
    </div>
  );
}
```

### 3. `SearchBar`
Permite que o usuário busque produtos por nome e aplique um filtro para mostrar apenas os produtos em estoque.

```javascript
export default function SearchBar({ checked, onChange, value, onInputChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onInputChange}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "14px"
        }}
      />
      <label style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
        <input
          type="checkbox"
          name="showOnStocked"
          id=""
          checked={checked}
          onChange={onChange}
          style={{ marginRight: "8px" }}
        />
        <p style={{ margin: 0 }}>Only show products in stock</p>
      </label>
    </div>
  );
}
```

### 4. `ProductTable`
Exibe a tabela de produtos com base nos critérios de busca e filtro. Agrupa produtos por categoria (frutas e vegetais) e mostra o nome e preço.

```javascript
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import data from "../api/data.js";

export default function ProductTable({ checked, value }) {
  const isFruit = data.filter((item) => item.category === "Fruits");
  const isVegetable = data.filter((item) => item.category === "Vegetables");
  // Lógica de filtragem...
}
```

### 5. `ProductRow` e `ProductCategoryRow`
Responsáveis por renderizar as linhas da tabela de produtos e as categorias, respectivamente.

```javascript
export default function ProductCategoryRow({ value }) {
  return (
    <thead>
      <tr>
        <th colSpan="2" style={{ padding: "8px", backgroundColor: "#f3f3f3", textAlign: "center", fontWeight: "bold", color: "#555" }}>
          {value}
        </th>
      </tr>
    </thead>
  );
}
```

### Como Executar o Projeto
Clone o repositório:

```javascript
bash
git clone https://github.com/seuusuario/seurepositorio.git
cd seurepositorio
```

### Instale as dependências:

```javascript
bash
npm install

```
### Execute o projeto:
```javascript
bash
npm start
```

Contribuições
Sinta-se à vontade para contribuir com o projeto. Abra um pull request ou um issue para discutir melhorias ou novas funcionalidades.
