import Header from './components/Header';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {routes}
      </div>
    </div>
  );
}

export default App;
