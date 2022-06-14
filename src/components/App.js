import React,{useState,useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts, setContacts]=useState([]);
  const addContactHandler = (contact)=>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(), ...contact}]);
  };

  const removeContactHandler =(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(()=>{

    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts)  setContacts(retriveContacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className='ui container'>
      <Router>
        <Header/>
        <Switch>
        
          <Route path="/" render={(props)=> (<ContactList {...props} contacts={contacts} getContactId = {removeContactHandler}  />) } />
          <Route path="/add" render={(props)=>(<AddContact {...props} addContactHandler={addContactHandler} />)} />
        </Switch>
      </Router>
      
      
      
      {/*<AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/> */}
    </div>
    
  );
}

export default App;
