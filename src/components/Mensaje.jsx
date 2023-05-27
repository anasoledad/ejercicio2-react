import React from 'react';

const Mensaje = ({nuevoMensaje}) => {
    return (
        <section className='py-5'>
            <h1 className='text-center text-danger'>Hello {nuevoMensaje}</h1>
        </section>
    );
};

export default Mensaje;