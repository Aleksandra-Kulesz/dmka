import React, {Component} from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        phone: '',
        message:'',
        errors: [],
        fileNames:[],
        fileInput:React.createRef()
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleInputFileChange = (e) => {
        const loadedFiles = [...e.target.files];
        const fileNames = [];
         loadedFiles.map(e=>{
             fileNames.push(e.name)
             return null
         })
        
         this.setState({fileNames:[...this.state.fileNames,...fileNames]})
        
    };

    handleModalClose = () => {
        if (typeof this.props.closeModal === 'function'){
            this.props.closeModal()
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const errors = [];
        const {name, phone, message} = this.state;

        if (name.length < 3 || phone.length < 9 || message.length < 3) {
            errors.push('Pola imię i nazwisko oraz wiadomość muszą składać się z co najmniej 3 znaków, a pole numer telefonu z co najmniej 9.');
            this.setState({
                errors,
            });
        }
    };

    render() {
        return (
                <form className={this.props.type==='element'?"form":'form modal'} onSubmit={this.handleFormSubmit}>
                    <h2 className="form__header">{this.props.type==='element'?'Formularz kontaktowy':'Aplikuj'}</h2>
                    
                    {this.props.type==='element'?null:<i className="far fa-times-circle" onClick={this.handleModalClose}/>}

                    <div className="form__field">
                        <i className="fas fa-user"/>
                        <input id='name ' onChange={this.handleChange} name='name' type="text" className="form__input--name"
                               placeholder='np. Jan Kowalski'/>
                    </div>

                    <div className="form__field">
                        <i className="fas fa-mobile-alt"/>
                        <input id='phone' type="number" onChange={this.handleChange} name='phone' className="form__input--phone"
                               placeholder='np. +48 000 000 000'/>
                    </div>

                    <div className="form__field">
                        <i className="fas fa-pencil-alt"/>
                        <textarea id='message' onChange={this.handleChange} name='message' className="form__input--message"
                              placeholder='Tutaj wpisz swoją wiadomość'/>
                    </div>
                   
                    <div className="form__field">
                        <label className='form__input__fileLoader--label'> <i className="fas fa-file-upload"/> Wybierz plik 
                            <input type='file' multiple className='form__input__fileLoader' name='file' ref={this.state.fileInput} onChange={e=>{this.handleInputFileChange(e)}}/>
                        </label>
                        <div className="form__input__files">
                            {
                                this.state.fileNames.map((e,i)=>{
                                    return (
                                    <p className ='form__input__file' key={i}>{e}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {this.state.errors.length>0?<p className="form__errors">{this.state.errors.map((e)=>e)}</p>:null}
                    <button className='form__submit' onClick={this.handleFormSubmit}><i className="fas fa-arrow-circle-up"/>Wyślij</button>
                </form>
        )
    }
}

export {ContactForm};
