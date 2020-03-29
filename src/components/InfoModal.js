import React, { Component } from "react";

const InfoModal = (props) => {

    
const handleInfoModalClose = () => {
    if (typeof props.closeModal === 'function'){
        props.closeModal()
    }
}

    return (
        <div className='modal__content'>
            <i className="far fa-times-circle close" onClick={handleInfoModalClose}/>
            {props.type === 'success'? <i className="far fa-check-square message"/>:<i className="far fa-times-circle message"/>}
            {props.type === 'success'? <p className='modal__info'>Dziękujemy za wysłanie zgłoszenia.</p>:<p className='modal__info'>Coś poszło nie tak, spróbuj ponownie później lub skorzystaj z innej formy kontaktu.</p>}
        </div>
    )
}

export {InfoModal};