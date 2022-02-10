import {React} from 'react'

const Contact = () => {
    return (
        <div>
            <form method="post" action="process.php">
                <h2 className="ContactHeader">Please Feel Free to Contact Us!</h2>
                <input id="first-name" type="text" required placeholder="First name" name="First-Name"></input>
                <input type="text" required placeholder="Last name" name="Last-Name"></input>
                <input id="eml" type="email" required placeholder="Email@gmail.com" name="Email"></input>
                <input id="tel" type="tel" placeholder="Phone Number" name="Phone-Number"></input>
                <textarea rows="6" required placeholder="Message" name="Message"></textarea>
                <div className="btn-group">
                    <button className="resetForm" type="reset">Reset</button>
                    <button className="SumbitForm" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
