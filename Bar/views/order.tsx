import NavBar from './components/navbar'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'

declare var require: any

var React = require('react');

export default function Order(props) {
    const tempdatabase = props.database;
    var idcounter = 0;
    const navigate = useNavigate();

    const [beverage, setBeverage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        var userData = tempdatabase.find((user) => user.loggedIn === true);

        if (userData) {

            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes();
            var dateTime = date + ' ' + time;

            var order = {
                id: idcounter,
                recepient: userData.username,
                drink: beverage,
                specialInfo: description,
                date: dateTime,
            };
            idcounter++;
            props.handleCallback(order);
            alert("Order Confirmed");
            navigate('/');
        }

        else {
            alert("You must be signed in to order a beverage");
        }
    }

    return (
        <div>
            <NavBar />
            <section className="form-parent">
                <form className="form-login" onSubmit={handleSubmit}>
                    <header className="form-header2">
                        <h2>Place Order</h2>
                        <p>
                            Once your order is placed, a bartender will begin to mix the drink (times may vary).<br/>
                            Once your beverage is ready, you can pickup your beverage from the pickup area.<br />
                            Please have indentification ready.
                        </p>
                    </header>

                    <div className="row-spacer">
                        <input type="text" id="beverage" name="beverage" placeholder="Name of Beverage" required onChange={(e) => setBeverage(e.target.value)} />
                    </div>

                    <div className="row-spacer">
                        <textarea id="special" name="special" rows="5" cols="50" placeholder="Special Directions eg.On the Rocks" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <button className="login" type="submit">Confirm Order</button>
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