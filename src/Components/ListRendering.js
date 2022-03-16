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
            city: 'khi',
            id:1
        },
        {
            name: 'hosh',
            age: 23,
            city: 'isb',
            id:2
        }, {
            name: 'khosh',
            age: 12,
            city: 'lhr',
            id:3
        }
    ]
    //const RenderingPersons =Persons.map(person=> <h3>My name is {person.name} my age is {person.age} and my city is {person.city}</h3>)
    const personSecondFile = persons.map(persons => <PersonRendering key={persons.id} persons={persons} />)


    return <div> {personSecondFile} </div>

        
    
}

export default ListRendering