import React, { Component } from "react";

const InfoModal = (props) => {
    return (
        <div className='modal__content'>
            {props.type === 'success'? <i class="far fa-check-square"/>:<i class="fas fa-times-circle"/>}
            {props.type === 'success'? <p className='modal__info'>Dziękujemy za wysłane zgłoszenie.</p>:<p className='modal__info'>Coś poszło nie tak, spróbuj ponownie później lub skorzystaj z innej formy kontaktu.</p>}
        </div>
    )
}

export {InfoModal};