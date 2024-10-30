export default function ProductCategoryRow({ value }) {
  return (
    <thead>
      <tr>
        <th
          colSpan="2"
          style={{
            padding: "8px",
            backgroundColor: "#f3f3f3",
            textAlign: "center",
            fontWeight: "bold",
            color: "#555"
          }}
        >
          {value}
        </th>
      </tr>
    </thead>
  );
}
