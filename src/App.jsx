import { useState } from 'react';
import ContactList from './components/contactList';
import SelectedContactView  from './components/selectedContactView';

import './App.css'



function App() {
  
  const [selectedId, setSelectedId] = useState(null);
  if(selectedId){
    return <SelectedContactView selectedId={selectedId} setSelectedId={setSelectedId} />
  }
  return (
    <>
      <ContactList selectedId={selectedId} setSelectedId={setSelectedId} />     
    </>
  )
}

export default App
