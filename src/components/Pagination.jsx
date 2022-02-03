import React from 'react';

const Pagination = ( { prev, next, onPrev, onNext } ) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {
                    prev ?
                        ( 
                            <li className='page-item'>
                                <button onClick={handlePrev} className='page-link'>Prev</button>
                            </li>
                        )
                        :
                        null
                }
                {
                    next ?
                        ( 
                            <li className='page-item'>
                                <button onClick={handleNext} className='page-link'>Next</button>
                            </li>
                        )
                        :
                        null
                }
                
            </ul>
        </nav>
    );
};

export default Pagination;
