
import {useState} from 'react';
function App() {

  const [Skills,setSkills]=useState([]);
  const HandleSkill=(event)=>{
  if(event.target.checked){
    setSkills([...Skills,event.target.value]);
  }
    else{
      setSkills(Skills.filter((items)=>items!=event.target.value));

    }
  
  }


  return (
    <>
      <h1>Handle checkbox in react js</h1>
      <p><b>select your skill</b></p>
      <input onChange={HandleSkill} type="checkbox" id="PhP" value="PhP" />
      <label htmlFor="PhP">PhP</label>
      <br/><br/>
      <input onChange={HandleSkill} type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br/><br/>
      <input onChange={HandleSkill} type="checkbox" id="java" value="java"/>
      <label htmlFor="java">JAVA</label>
      <br/><br/>
      <input onChange={HandleSkill} type="checkbox" id="c++" value="c++" />
      <label htmlFor="c++">C++</label>

      <h1>{Skills.toString()}</h1>
    </>
  )
}

export default App;

id ka use label aur input ko link karne ke liye hota hai. Jab aap label ke andar htmlFor ka use karte ho, 
  toh label click karne par checkbox automatically select ho jata hai.

value="PhP" ka matlab hai jab checkbox select hoga toh iska value "PhP" hoga.
checked batata hai checkbox select hai ya nahi (true / false).
