import './App.css'
import Message from './Message';
import ParentComponent from './components/ParentComponent';
function App() {
  return <>
    <ParentComponent />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </>
}
export default App;