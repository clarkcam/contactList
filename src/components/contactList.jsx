import { ContactRow } from "./contactRow"
import { useState, useEffect } from "react";


const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];



export function ContactList({selectedId, setSelectedId}) {
    const [contacts, SetContacts] = useState(dummyContacts);
    console.log(contacts);

    useEffect(() => {
        async function fetchContacts() {
            try {
            const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
            const json = await response.json();

            SetContacts(json);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
    }, []);

    function RenderContacts({contact, selectedId, setSelectedId}) {
                
        if(selectedId){
            if(selectedId === contact.id){
                return <ContactRow status="selected" key={contact.id} contact={contact} setSelectedId={setSelectedId}/>;
            } 
            else {
                return;
            }
        }
        return <ContactRow status="" contact={contact} selectedId={selectedId} setSelectedId={setSelectedId}/>;
    }
    

    return (
        <div>
        <table>
            <thead>
                <tr>
                <th colSpan={3}>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                 {
                    contacts.map((contact) => {
                        return <RenderContacts key={contact.id} contact={contact} selectedId={selectedId} setSelectedId={setSelectedId}/>;
                    })
                }
               
            </tbody>
            
        </table>
        <button onClick={(e) => {setSelectedId(0)}}>Reset view</button>
        </div>
    );
}