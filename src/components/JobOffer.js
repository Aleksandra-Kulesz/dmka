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
                    {this.props.job.title} - {this.props.job.place}</h3>

                <p className={classes}>
                    <span>Miejsce pracy: {this.props.job.place}</span>
                    Opis: {this.props.job.description}
                    <span>Stawka: {this.props.job.salary}</span>
                </p>

                <button className="job_application">Aplikuj!</button>
            </li>
        )
    }
}

export {JobOffer};