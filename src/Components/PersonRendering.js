import React from 'react'


function PersonRendering(person) {
  return (
    <h3>My name is {person.name} my age is {person.age} and my city is {person.city}</h3>
  )
}

export default PersonRendering