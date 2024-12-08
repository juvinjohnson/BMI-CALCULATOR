import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [isWeight, setIsWeight]= useState(true)
  const [isHeight, setIsHeight]= useState(true)
  const [result,setResult]=useState(0)

const validate= (e)=>{
  const{name,value}= e.target

  if (!!value.match('^[0-9.]*$')) {
    if (name=='weight') {
      setWeight(value)
      setIsWeight(true)
    }
    else{
      setHeight(value)
      setIsHeight(true)
    }
  }
  else{
    if (name=='weight') {
      setWeight(value)
      setIsWeight(false)
    }
    else{
      setHeight(value)
      setIsHeight(false)
    }
  }  
    
  }
const handleClear = ()=>{
  setHeight("")
  setWeight("")
  setIsHeight(true)
  setIsWeight(true)
  setResult()
}

const calculate = ()=>{
  setResult(weight/(height**2))
}

  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100%' }}>
        <div className='bg-light p-5 rounded'>
          <h1>BMI Calculator</h1>
          <h5>Are you healthy or not? <i class="fa-solid fa-user-nurse"></i></h5>
          <div className='flex-column bg-success p-3 my-5 rounded-3 d-flex align-items-center justify-content-center' >
            <p>Your BMI is:</p>
            <h2>{result}</h2>
          </div>
          <div className="mb-3"><TextField id="outlined-basic" label="Your Weight in Kilograms" value={weight} variant="outlined" className='w-100' name='weight' onChange={(e)=>validate(e)}/></div>
          { isWeight==false && <p className='text-danger'>*Invalid input</p>}
          <div className="mb-3"><TextField id="outlined-basic" label="Your height in metres" value={height} variant="outlined" className='w-100' name='height' onChange={(e)=>validate(e)}/></div>
          { isHeight==false && <p className='text-danger'>*Invalid input</p>}

            <div className='d-flex justify-content-between'>
              <Button disabled={isWeight && isHeight ? false:true} variant="contained"  className='me-2 w-50' color='success' onClick={calculate}>Calculate</Button>
              <Button variant="outlined" className='ms-2 w-50' onClick={handleClear}>Clear</Button>
            </div>

        </div>

      </div>
    </>
  )
}

export default App