import './app.css'
import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Workflow from './components/Workflow/Workflow'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Workflow />
    </div>
  );
}

export default App;
