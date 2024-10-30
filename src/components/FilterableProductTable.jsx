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
