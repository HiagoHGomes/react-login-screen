import { Link } from 'react-router-dom';
import './App.css';
import { Rotas } from './routes';

function App() {
  return (
    <div className='container'>
        <h1>Header</h1>
        <Link to={"/private"}>Pagina privada</Link>
        <hr />
      <Rotas/>
    </div>
  );
}

export default App;
