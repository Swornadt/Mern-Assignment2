import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Search from './Search';

const App = () => {
  const [name,setName] = useState("")
  const [age, setAge]= useState("");
  const [person, setPerson] = useState([]);
  const [searchNumber, setSearchNumber] = useState();
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim()==="" || age.trim()===""){
      return;
    }
    //console.log(name,age);
    const newPerson = {
      name: name,
      age: age,
    }
    const updatedPersons = [...person,newPerson];
    setPerson(updatedPersons);
    console.log(updatedPersons)
    setName("")
    setAge("")
  }
  const handleSearchChange = (e) => {
    setSearchNumber(e.target.value)
  }
  const searchPerson = () => {
    const foundPerson = person[searchNumber];
    console.log(foundPerson);
  }
  return (
    <div>
      <Form name={name} age={age} 
            handleNameChange={handleNameChange} 
            handleAgeChange={handleAgeChange}
            handleSubmit={handleSubmit}/>
      <Search searchNumber={searchNumber} 
              handleSearchChange={handleSearchChange}
              searchPerson={searchPerson}/>
  </div>
  );
}

export default App;
