import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import styles from "../styles/EditPerson.module.scss"

export default function EditPerson() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [addressLineOne, setAddressLineOne] = useState("")
  const [addressLineTwo, setAddressLineTwo] = useState("")
  const [city, setCity] = useState("")
  const [county, setCounty] = useState("")
  const [postcode, setPostcode] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const params = useParams()
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/people/${params.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "firstName": firstName,
          "lastName": lastName,
          "addressLineOne": addressLineOne,
          "addressLineTwo": addressLineTwo,
          "city": city,
          "county": county,
          "postcode": postcode,
          "phone": phone,
          "email": email
        })
      })
      navigation("/");
  };

  useEffect(() => {
    fetch(`http://localhost:3000/people/${params.id}`)
      .then(res => res.json())
      .then((data) => {
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setAddressLineOne(data.addressLineOne)
        setAddressLineTwo(data.addressLineTwo)
        setCity(data.city)
        setCounty(data.county)
        setPostcode(data.postcode)
        setPhone(data.phone)
        setEmail(data.email)
      })   
      .catch(error => console.error(error.message))
  }, [])

  return (
    <div className={styles.container}>
      <h1>Edit contact</h1>
      <button className={styles.back_button} onClick={() => navigation("/")}>Back</button>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" onSubmit={handleSubmit} className={styles.submit_button}>
          Update
        </button>
      </form>
    </div>
  )
}
