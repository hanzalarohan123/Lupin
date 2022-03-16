import React from 'react'
import PersonRendering from './PersonRendering'

function ListRendering() {
    //simple list rendering
    //const names =['a','b','c','d']
    //const renderedNames =names.map(name => <h2>{name}</h2>) 
    const persons = [
        {
            name: 'josh',
            age: 20,
            city: 'khi'
        },
        {
            name: 'hosh',
            age: 23,
            city: 'isb'
        }, {
            name: 'khosh',
            age: 12,
            city: 'lhr'
        }
    ]
    //const RenderingPersons =Persons.map(person=> <h3>My name is {person.name} my age is {person.age} and my city is {person.city}</h3>)
    const personSecondFile = persons.map(person => <PersonRendering person={person} />)


    return <div> {personSecondFile} </div>

        
    
}

export default ListRendering