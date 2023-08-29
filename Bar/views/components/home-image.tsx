declare var require: any

var React = require('react');

export default function Hero() {
    return (
        <section className="image-section">
            <img className="home-image" src="./views/images/bar-image3.jpg" alt="giant drinks" />
            <div className="center-image">
                <p className="center-image--text"><span className="center-image--header">Keep Socializing</span><br />
                    Order your drinks online.<br /> So you can keep the party going.</p>
                <button className="go-to-order">Order Now</button>
            </div>
        </section>
    );
}