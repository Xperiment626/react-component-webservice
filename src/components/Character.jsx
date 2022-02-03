import React from 'react';

const Character = ( { characters = [] } ) => {
  return (
    <div className='row'>
        {
            characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={item.image} alt={item.name} />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr />
                            <p>Specie: {item.species}</p>
                            <p>Location: {item.location.name}</p>
                            <p>Status: {item.status}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
   );
};

export default Character;
