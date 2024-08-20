import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebaseConfig";

function CreateStudent(){
 
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  let handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await addDoc(collection(db, 'students'),{
        name: name,
        age: Number(age)
      })
      setName('')
      setAge('')
    }
    catch (error){
       console.log("Error in creating User!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={name} placeholder="Enter Student Name" onChange={(e)=>(setName(e.target.value))} required />
      <input type="number" value={age} placeholder="Enter Student Age" onChange={(e)=>(setAge(e.target.value))} />
      <button type="submit">Create Student</button>
    </form>
  );
}
export default CreateStudent;