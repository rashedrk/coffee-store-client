
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-center text-5xl text-red-500'>Coffee Store</h1>
      <div className='p-8'>
        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
