import { useState } from 'react';
import { ContactList } from './components/contactList';


import './App.css'
import { ContactRow } from './components/contactRow';


function App() {
  const [selectedId, setSelectedId] = useState(0);
  
  return (
    <>
      <ContactList selectedId={selectedId} setSelectedId={setSelectedId} />     
    </>
  )
}

export default App
