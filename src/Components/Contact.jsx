import {React,useState} from 'react'
import Data from '../Util/Links'

const Contact = () => {
   const [isError, setIsError] = useState(false)
    const [isPage,setIsPage] = useState(Data)
    if(isError){{
        <div>
            <h1>Error 404</h1>
        </div>
    }}
    
    if(isPage){
        return Data.map((data)=>{
            const {id,Person,Email,Phone,Github,image} = data;
            return(
                <div>
                    <h1 className="contactHeader">Contact Our Team Members</h1>
                    <div className="contact" key={id}>
                    <h1 className="Person">{Person}</h1>
                    <div className="PersonInfoHolder">
                        <div>
                            <img className="PersonImage" src={image} alt={Person} />
                        </div>
                        <div>
                            <ul className="PersonContact">
                                <li className="PersonInfo">Email: {Email}</li>
                                <li className="PersonInfo">Phone: {Phone}</li>
                                <li className="PersonInfo">Github: {Github}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            )
        })
    }
}

export default Contact
