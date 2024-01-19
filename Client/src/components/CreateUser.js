import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const CreateUser = () => {

    return (
        <React.Fragment>

            <div className='d-flex justify-content-around bg-black py-5 w-100'>
                <div className='text-start fs-4 text-white fw-bold' style={{ letterSpacing: "0.5rem" }}> IT Companies  </div>
                <div> <Link to="/" className='text-start fs-4 text-white fw-bold text-decoration-none' style={{ letterSpacing: "0.2rem" }}> Company List</Link></div>
            </div>

            <Form />

        </React.Fragment>
    )
}

const Form = () => {


    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [city, setCity] = useState();
    const [status, setStatus] = useState()
    const [exp, setExperience] = useState()
    const [link, setLink] = useState()
    const [plateform, setPlateform] = useState()
    const [plateform_link, setPlateform_link] = useState()

    const createUser = async (userData) => {
        return await axios.post(`${process.env.REACT_APP_API}/create`, userData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(status);
        let data = { name, email, mobile, city, status, exp, link, plateform, plateform_link }
        console.log("1", data);
        createUser(data).then((res) => {
            console.log("2", res.data);
            if (res.data) {
                navigate('/')
            }
        })
    }


    const inputStyle = {
        border: 'hidden',
        borderBottom: "1px solid black",
        padding: '8px',
        transition: 'border-color 0.3s ease-in-out',
        width: "100%"
    };


    return (

        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md'>

                <form>
                    <div class="form-group my-3">
                        <input type="text" name="name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Company Name" required />
                    </div>
                    <div class="form-group my-3">
                        <input type="text" name="email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                    </div>
                    <div class="form-group my-3">
                        <input type="text" name="mobile" style={inputStyle} value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile No." required />
                    </div>
                    <div class="form-group my-3">
                        <input type="text" name="city" style={inputStyle} value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" required />
                    </div>

                    <div class="form-group my-3">
                        <input type="text" name="exp" style={inputStyle} value={exp} onChange={(e) => setExperience(e.target.value)} placeholder="Enter Experience" required />
                    </div>

                    <div class="form-group my-3">
                        <input type="text" name="link" style={inputStyle} value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter Link" required />
                    </div>


                    <div class="form-group my-3">
                        <input type="text" name="plateform" style={inputStyle} value={plateform} onChange={(e) => setPlateform(e.target.value)} placeholder="Enter Plateform / Refrence" required />
                    </div>

                    <div class="form-group my-3">
                        <input type="text" name="plateform_link" style={inputStyle} value={plateform_link} onChange={(e) => setPlateform_link(e.target.value)} placeholder="Enter Plateform Link" required />
                    </div>


                    <div class="form-group my-3">
                        <select style={inputStyle} name="status" value={status} onChange={(e) => setStatus(e.target.value)} >
                            <option hidden>-- Select Status --</option>
                            <option value='pending'> Pending </option>
                            <option value="sent"> Sent </option>
                        </select>
                        {/* <input type="text" name="status" style={inputStyle}  value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter Status" required /> */}
                    </div>

                    <button type='submit' onClick={handleSubmit} class="btn btn-outline-dark mx-1 my-3">Create</button>
                </form>
            </div>
            <div className='col-md-4'></div>
        </div>
    )
}

export default CreateUser