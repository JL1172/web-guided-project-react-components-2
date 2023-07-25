import React from 'react'

export default function Pet(props) {
const {pet} = props;
const {name,type} = pet;
  return (
    <div className='pet-friends container'>
      <p>{name} ({type})</p>
    </div>
  )
}
