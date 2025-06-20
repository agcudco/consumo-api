import './App.css'
import UserTable from './components/UserTable'
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos principales de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeReact


function App() {
  

  return (
    <div className="App">
      <UserTable />
    </div>
  )
}

export default App
