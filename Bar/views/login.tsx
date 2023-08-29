import NavBar from './components/navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

declare var require: any

var React = require('react');

export default function Login(props) {

    const tempdatabase = props.database;

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        var userData = tempdatabase.find((user) => user.username === username);

        if (userData) {
            if (userData.password !== password) {
                alert("Password invalid");
            }
            else {
                if (userData.type === "admin") {
                    navigate('/admin');
                }

                else if (userData.loggedIn) {
                    alert("this is not you")
                }

                else {
                    props.handleCallback(username);
                    navigate('/');
                }
            }
        }
        else {
            alert("Username invalid");
        }
    }

    return (
        <div>
            <NavBar />
            <section className="form-parent">
                <form className="form-login" onSubmit={handleSubmit}>
                    <header className="form-header">
                        <h2>Log In</h2>
                        <p>
                            This website assumes our patrons already have an accoun with us.<br />
                            We will be releasing a sign up feature in the future.
                        </p>
                    </header>
                    <div className="row-spacer">
                        <input id="name" name="name" type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="row-spacer">
                        <input id="password" name="password" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button className="login" type="submit">Log In</button>
                </form>
            </section>
            <footer className="login-footer">
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
        </div>
    );
}