import NavBar from './components/navbar'

declare var require: any

var React = require('react');

export default function Admin(props) {


    function Ready() {
        
    };

    const tableRows = props.database.map((element) => {
        return (
            <tr>
                <td>{element.recepient}</td>
                <td>{element.drink}</td>
                <td>{element.specialInfo}</td>
                <td>{element.date}</td>
                <td>
                    <button className="login" onClick={Ready}>Yes</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <NavBar />
            <section className="bartender-table">
                <h2 className="table-title">Drinks Handler</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Recipient</th>
                            <th>Drink</th>
                            <th>Special Instructions</th>
                            <th>Time Placed</th>
                            <th>Pick up?</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </section>

        </div>
    );
}