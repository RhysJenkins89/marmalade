import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/AddressCard.module.scss"

export default function AddressCard({ entry, deletePerson }) {
  return (
    <div className={styles.container}>
      <p>{entry.firstName} {entry.lastName}</p>
      <p>{entry.addressLineOne}</p>
      <p>{entry.addressLineTwo}</p>
      <p>{entry.city}</p>
      <p>{entry.county}</p>
      <p>{entry.postcode}</p>
      <p>{entry.phone}</p>
      <p>{entry.email}</p>
      <div className={styles.buttons_container}>
        <Link to={`/edit/${entry.id}`}>Edit</Link>
        <p onClick={() => deletePerson(entry.id)}>Delete</p>
      </div>
    </div>
  )
}











{/* <div className={styles.container}>
      {entries.map((entry) => (
        <div key={`${entry.firstName} ${entry.lastName}`}>
          <p>{entry.firstName}</p>
          <p>{entry.lastName}</p>
          <p>{entry.addressLineOne}</p>
          <p>{entry.addressLineTwo}</p>
          <p>{entry.city}</p>
          <p>{entry.county}</p>
          <p>{entry.postcode}</p>
          <p>{entry.phone}</p>
          <p>{entry.email}</p>
          <Link to={`/edit/${entry.id}`}>Edit</Link>
          <p onClick={() => deletePerson(entry.id)}>Delete</p>
        </div>
      ))}
    </div> */}