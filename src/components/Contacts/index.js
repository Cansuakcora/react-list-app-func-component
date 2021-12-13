import React from 'react';
import List from './List';
import Form from './Form'; 
import './styles.css';
import {useState , useEffect} from 'react';

function Contacts() {

    const [contacts, setContacts] = useState([{
        fullname:'cansu',
        phone:1234
    },
    {
        fullname:'test',
        phone:5678
    }
]);

   useEffect(() => {
       console.log(contacts)
   }, [contacts]) 


    return (
        <div className='container'>
            <h2>Contacts</h2>
            <List propcontacts={contacts}/>
            <Form  propform={setContacts} propcontacts={contacts} />
        </div>
    )
}

export default Contacts;
