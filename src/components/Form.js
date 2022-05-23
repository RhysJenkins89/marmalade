import React, {useState} from 'react'
import styles from "../styles/Form.module.scss"

export default function Form({ addPerson }) {
  // Form state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [addressLineOne, setAddressLineOne] = useState("")
  const [addressLineTwo, setAddressLineTwo] = useState("")
  const [city, setCity] = useState("")
  const [county, setCounty] = useState("")
  const [postcode, setPostcode] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  //Show/hide form state
  const [formVisible, setFormVisible] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    addPerson(
      { 
        firstName, 
        lastName, 
        addressLineOne, 
        addressLineTwo,
        city,
        county,
        postcode,
        phone,
        email
      });
  };

  return (
    <div className={styles.container}>
      <h1>Address book</h1>
      <button className={styles.show_button} onClick={() => setFormVisible(!formVisible)}>
        {
          formVisible ? <span>Hide form</span> : <span>Show form</span>  
        }
      </button>
      <form onSubmit={handleSubmit} className={`${styles.form} ${formVisible ? "" : styles.form_invisible}`}>
        <label>Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label>Address</label>
        <input
          type="text"
          name="addressLineOne"
          id="addressLineOne"
          placeholder="Address line one"
          value={addressLineOne}
          onChange={(event) => setAddressLineOne(event.target.value)}
        />
        <input
          type="text"
          name="addressLineTwo"
          id="addressLineTwo"
          placeholder="Address line two"
          value={addressLineTwo}
          onChange={(event) => setAddressLineTwo(event.target.value)}
        />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Town or city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          type="text"
          name="county"
          id="county"
          placeholder="County"
          value={county}
          onChange={(event) => setCounty(event.target.value)}
        />
        <input
          type="text"
          name="postcode"
          id="postcode"
          placeholder="Postcode"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className={styles.submit_button} type="submit" onSubmit={handleSubmit}>
          Add contact
        </button>
      </form>
    </div>
  )
}
