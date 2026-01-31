import { Link, Outlet } from "react-router-dom";

export default function Produtos() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/produtos/car">Cars</Link> |{" "}
        <Link to="/produtos/bike">Bikes</Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}