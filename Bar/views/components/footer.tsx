declare var require: any

var React = require('react');

export default function Footer() {
    return (
        <footer className="regular-footer">
            <div className="footer--content">
                <ul className="footer--nav">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>ORDER</li>
                    <li>LOGIN</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </footer>
    );
}