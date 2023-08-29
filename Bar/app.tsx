import Home from './views/home'
import Login from './views/login'
import Order from './views/order'
import Admin from './views/adminview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


var React = require('react');
var ReactDOM = require('react-dom');

var orders = [];

const logins = [
    {
        username: "user1",
        password: "pass1",
        type: "customer",
        loggedIn: false
    },
    {
        username: "user2",
        password: "pass2",
        type: "customer",
        loggedIn: false
    },
    {
        username: "admin1",
        password: "pass3",
        type: "admin",
        loggedIn: false
    }];

function PlaceOrder(childData) {
    orders.push(childData);
}

function PickUp(childData) {

}

function LoggingIn(childData) {

    logins.forEach((user) => { user.loggedIn = false });

    logins.find((user) => {
        if (user.username === childData) {
            user.loggedIn = true;
        }
    });
    
}
export class Hello extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home database={logins} />} />
                    <Route path="/login" element={<Login database={logins} handleCallback={LoggingIn} />} />
                    <Route path="/order" element={<Order database={logins} handleCallback={PlaceOrder} />} />
                    <Route path="/admin" element={<Admin database={orders} handleCallback={PickUp} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));