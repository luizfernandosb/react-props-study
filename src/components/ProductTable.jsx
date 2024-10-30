import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import data from "../api/data.js";

export default function ProductTable({ checked, value }) {
  const isFruit = data.filter((item) => item.category === "Fruits");
  const isVegetable = data.filter((item) => item.category === "Vegetables");
  const fruitsOnStock = data.filter(
    (item) => item.stocked === true && item.category === "Fruits"
  );
  const vegesOnStock = data.filter(
    (item) => item.stocked === true && item.category === "Vegetables"
  );
  const fruitFound = data.filter(
    (item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) &&
      item.category === "Fruits"
  );
  const vegeFound = data.filter(
    (item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) &&
      item.category === "Vegetables"
  );

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th
            style={{
              borderBottom: "2px solid #ccc",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Name
          </th>
          <th
            style={{
              borderBottom: "2px solid #ccc",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Price
          </th>
        </tr>
      </thead>
      <ProductCategoryRow value={fruitFound.length > 0 ? "Fruits" : ""} />
      <ProductRow
        value={
          value
            ? fruitFound.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "8px", color: "#333" }}>{item.name}</td>
                </tr>
              ))
            : checked
            ? fruitsOnStock.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "8px",
                      color: item.stocked === false ? "red" : "#333",
                    }}
                  >
                    {item.name}
                  </td>
                  <td style={{ padding: "8px", color: "#333" }}>
                    {item.price}
                  </td>
                </tr>
              ))
            : isFruit.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "8px",
                      color: item.stocked === false ? "red" : "#333",
                    }}
                  >
                    {item.name}
                  </td>
                  <td style={{ padding: "8px", color: "#333" }}>
                    {item.price}
                  </td>
                </tr>
              ))
        }
      />
      <ProductCategoryRow value={vegeFound.length > 0 ? "Vegetables" : ""} />
      <ProductRow
        value={
          value
            ? vegeFound.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "8px", color: "#333" }}>{item.name}</td>
                </tr>
              ))
            : checked
            ? vegesOnStock.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "8px",
                      color: item.stocked === false ? "red" : "#333",
                    }}
                  >
                    {item.name}
                  </td>
                  <td style={{ padding: "8px", color: "#333" }}>
                    {item.price}
                  </td>
                </tr>
              ))
            : isVegetable.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "8px",
                      color: item.stocked === false ? "red" : "#333",
                    }}
                  >
                    {item.name}
                  </td>
                  <td style={{ padding: "8px", color: "#333" }}>
                    {item.price}
                  </td>
                </tr>
              ))
        }
      />
    </table>
  );
}
