
import { Component } from 'react';
import { contactService } from '../../services/contactService'
import { Link } from 'react-router-dom'
import './ContactDetails.scss'

export class ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        console.log('this.props', this.props)
        const contact = await contactService.getById(this.props.match.params.id)
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading Contact.....</div>
        return (
            <div>
                <img src={`https://robohash.org/${contact._id}`} alt="" />
                <p>{contact.name}</p>
                <small>{contact.email}</small>
                <p>Phone: {contact.phone}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore deleniti quis facere, a rerum, voluptatem vitae iusto possimus voluptatum libero nulla, facilis hic at eligendi molestias. Quasi, corporis repellendus.</p>

                <button onClick={() => this.props.onDeleteContact(contact._id)}>Delete</button>
                <Link to={'/contact/edit/' + contact._id}>Edit</Link>
            </div>
        )
    }
}