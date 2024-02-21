import logo from './logo.svg';
import './App.css';
import Expenditure from './components/Expenditure';
import ExpenditureList from './components/ExpenditureList';
import IncomeList from './components/IncomeList';

function App() {
  return (
    <div className="App">
      <Expenditure />
      <ExpenditureList />
      <IncomeList />
    </div>
  );
}

export default App;
