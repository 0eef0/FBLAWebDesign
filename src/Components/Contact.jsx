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
                <div className="PersonInfo" key={id}>
                    <div className="PersonStuff">
                        <h1 className="Person">{Person}</h1>
                        <img className="PersonImg" src={image} alt={Person} />
                    </div>
                    <div className="PersonContact">
                        <p className='PersonEmail'><p className='sub'>Email:</p> <br/> {Email}</p>
                        <p className="PersonPhone"><p className='sub'>Phone-Number:</p> <br/>  {Phone}</p>
                        <p className="PersonGithub"><p className='sub'>Github:</p> <br/>  {Github}</p>
                    </div>
                </div>
            )
        })
    }
}

export default Contact
