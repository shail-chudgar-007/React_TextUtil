
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <Navbar title="TextUtil" about="About TextUtil"/>
    <div className="container">
    <TextArea heading="Enter the Text below for Analizing"/>
    </div>
  </>
  );
}

export default App;
