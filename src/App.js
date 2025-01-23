import './App.css';
import Testinomial from './Components/Testinomial';
import reviews from './Components/data';


function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]  justify-center items-center bg-gray-200">
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testinomial</h1>
        <div className=' bg-violet-400 h-[4px] w-[38.1%] mt-1 mx-auto'></div>
        <Testinomial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
