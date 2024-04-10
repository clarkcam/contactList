import ContactRow from "./contactRow";
import { useState, useEffect } from "react";

export default function SelectedContactView({selectedId, setSelectedId}) {
    const dummyContact = {
        id: 0,
        name: "",
        phone: "",
        email: "",
    };

    const [contact, SetContact] = useState(dummyContact);

    useEffect(() => {
        async function fetchContact() {
            try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedId}`);
            const json = await response.json();

            SetContact(json);

            } catch (error) {
                console.error(error);
            }
        }
        fetchContact()
    }, []);

    return (
        <>
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
                    <ContactRow key={contact.id} contact={contact} selectedId={selectedId} setSelectedId={selectedId}/>
                }
               
            </tbody>
            
        </table>
        <button onClick={(e) => {setSelectedId(0)}}>Reset view</button>
        </>
    )

}