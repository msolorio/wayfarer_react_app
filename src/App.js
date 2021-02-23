import Header from './components/Header';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      {routes}
    </div>
  );
}

export default App;
