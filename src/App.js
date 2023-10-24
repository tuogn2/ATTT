import './App.css';
import Infor from './component/Infor';
import Encryption from './component/Encryption';

function App() {
  return (
    <div className='bg-slate-300 h-[100vh] w-full'>
      <div className='pt-5 pl-5 flex'>
        <Infor />
        <Encryption/>
      </div>
    </div>
  );
}

export default App;
