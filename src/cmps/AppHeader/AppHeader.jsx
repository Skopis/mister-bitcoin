
import { NavLink, withRouter } from 'react-router-dom'
import './AppHeader.scss'

const _AppHeader = (props) => {
    return (
        <div className="app-header">
            <h1>Contact App</h1>
            <ul>
                <li><NavLink to="/statistics" activeClassName="active-nav">Statistics</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active-nav">Contacts</NavLink></li>
                <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)

