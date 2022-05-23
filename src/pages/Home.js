import { useState, useEffect } from "react";
import Form from "../components/Form"
import AddressCard from "../components/AddressCard"
import styles from "../styles/Home.module.scss"

function App() {
  const [entries, setEntries] = useState([]);

  const addPerson = (entry) => {
    fetch("http://localhost:3000/people", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(entry)
    })
    .catch(err => console.error(err))
    
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data)
      })

    // setEntries(
    //   [...entries, entry].sort((a, b) =>
    //     a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
    //   )
    // );
  };

  const deletePerson = (id) => {
    fetch(`http://localhost:3000/people/${id}`, {method: "DELETE"})
      .catch((err) => console.error(err))

    setEntries(entries.filter((item) => {
      return item.id !== id
    }))
  }
  
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data)
      })
  }, [])

  return (
    <div className={styles.main_container}>
      <Form addPerson={addPerson} />
      <div className={styles.cards_container}>
        {
          entries.map((entry) => {
            return <AddressCard entry={entry} deletePerson={deletePerson} key={entry.id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;