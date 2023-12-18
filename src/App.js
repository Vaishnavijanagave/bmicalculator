// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const[oriheight,setheight]=useState('0');
  const[oriweight,setweight]=useState('0');
  const[result,setresult]=useState('');
  const[msg,setmsg]=useState('bmi msg')
  const[color,setcolor]=useState('');
  const[name,setname]=useState('');

  const removeheight=()=>{
    setheight("");
   
    // const oriheight='red';
    // setcolor({ color: oriheight });
    
  }

  const removeweight=()=>{
    setweight("");
  }

  const submit=()=>{
    let calheight= oriheight/100;
let result= (oriweight/(calheight*calheight).toFixed(1));
    setresult(result);

    
     if(result<18){
     
      setmsg("Underweight, Take Diet and become Fit");
      // return 'yellow';
      
    }
     else if(result>19 && result<24){
      
      setmsg("Weight is normal, You are fit");
      // return 'green'
      
    }
    else if(result>25 && result<30){
      setmsg("Overweight, Do Exercise and Eat Healthy Food");
      // return 'brown';
      
    }
    else if(result>30 && result<50){
      setmsg("Obese, Need More WorkOut and Proper Diet");
      // return 'red';
    }
    else{
      setmsg("Enter Valid Height and Weight")
      // return 'blue'
    }
    
  }
 
  

const reload=()=>{
  setheight('0');
  setweight('0');
}

  const height=(e)=>{
const oriheight = e.target.value;
setheight(oriheight);

  }
  const weight=(e)=>{
 const oriweight=e.target.value;
 setweight(oriweight);
  }

  const changename=(e)=>{
    const name=e.target.value;
    setname(name);
  }

 
  // const backgroundColor=submit();

  return (
    <div className="container">
      <h1 id='h1'>BMI calculator</h1>

<div className="detail">
  <p id='name'>Enter Your Name: </p>
  <input type="text" onChange={changename} value={name} placeholder='Enter Your Name' />
</div>
      <div className="height one" >
        <p id='h'>Enter Height: (in)  </p>
        <input type="number" onClick={removeheight} value={oriheight} name="height" id="height" onChange={height} placeholder='Enter your Height' />
      </div>
      <div className="weight one">
        <p id='w'>Enter Weight: (lbs)  </p>
        <input type="number" onClick={removeweight} value={oriweight} name="weight" id="weight" onChange={weight}  placeholder='Enter your Weight'/>
      </div>

      <div className='button' >
        <button className="btn btn-primary mx-6 my-3" onClick={submit} >
          
            Submit</button>
        <button className="btn btn-danger my-3 mx-4" onClick={reload}>Reload</button>
      </div>

      <div className="result">
        <p className='info'>You Entered <p className='ori'> {oriheight}</p> Height.</p>
        <p className='info'>You Entered <p className='ori'>{oriweight}</p>  Weight.</p>
        <p className='info'>Your BMI is :<p className='ori'> {result}</p></p>
        <p className='info spl'>Special Msg for You:<p className='ori'>{name} your {msg}</p> </p>
      </div>
    </div>
  );
}

export default App;
