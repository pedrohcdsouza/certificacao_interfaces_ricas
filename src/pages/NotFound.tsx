import { Link } from "react-router-dom";

export default function NotFound() {
    return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <Link to="/movies">Voltar para Home</Link>
    </div>
    )
    
}