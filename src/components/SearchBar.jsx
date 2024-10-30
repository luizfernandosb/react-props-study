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
