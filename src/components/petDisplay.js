import React from 'react';
import Pet from './pet'

const PetDisplay = (props) => {

  let allPets = props.pets
    // .filter((pet) => {
    //   if (props.searchTerm !== "") {
    //     if (pet.name.includes(props.searchTerm))
    //       return pet;
    //   } else 
    //     return pet;
    // })
    .map((pet) => {
      return (<Pet 
        name={pet.name}
        //category={pet.category !== null ? pet.category.name : null}
        //tags={pet.tags}
      />)
    })

  return(<div className="petContainer">{allPets}</div>)
}

export default PetDisplay;