import { Link, useNavigate } from 'react-router-dom'

declare var require: any

var React = require('react');

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav>
            <h1 className="website-name">FillerTitle</h1>
            <ul className="navigation-buttons">
                <li onClick={() => navigate('/')}>HOME</li>
                <li>ABOUT US</li>
                <li onClick={() => navigate('/order')}>ORDER</li>
                <li onClick={() => navigate('/login')}>LOGIN</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    );
}