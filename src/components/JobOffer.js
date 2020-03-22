import React, {Component} from 'react';

class JobOffer extends Component {
    state = {
        isOpen: false
    };

    handleOpenClick = (e) => {
        this.setState({isOpen:!this.state.isOpen})
    };

    render() {
        let classes = 'job__description';
        if (this.state.isOpen) {
            classes = 'job__description--open';
        }

        return (
            <li className='job' onClick={e => this.handleOpenClick(e)}>
                <h3 className='job__name'>
                    {this.props.job.attributes.position} - {this.props.job.attributes.place}</h3>

                <p className={classes}>
                    <span>Miejsce pracy: {this.props.job.attributes.place}</span>
                    Opis: {this.props.job.attributes.description}
                    <span>Stawka: {this.props.job.attributes.salary}</span>
                </p>

                <button className="job_application">Aplikuj!</button>
            </li>
        )
    }
}

export {JobOffer};