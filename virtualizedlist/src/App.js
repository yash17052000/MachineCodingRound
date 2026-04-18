import logo from './logo.svg';
import './App.css';
import VirtualisedList from './Components/VirtualisedList';

function App() {
  const List=Array.from({length:1000},(_,index)=>index+1)
  return (
    <VirtualisedList list={List} itemheight={40} height={400} width={300}/>
  );
}

export default App;
