import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const UpdateUser = () => {
    return (
        <>
            <div className='d-flex justify-content-around bg-black py-5 w-100'>
                <div className='text-start fs-4 text-white fw-bold' style={{ letterSpacing: "0.5rem" }}> IT Companies </div>
                <div> <Link to="/" className='text-start fs-4 text-white fw-bold text-decoration-none' style={{ letterSpacing: "0.2rem" }}> Company List</Link></div>
            </div>
            <Form />
        </>
    )
}

const initialData = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    status: "",
    exp: "",
    link: "",
    plateform: "",
    plateform_link: ""
}

const Form = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [values, setValue] = useState(initialData);

    const { name, email, mobile, city, status, exp, link, plateform, plateform_link } = values


    const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });
    }

    const singleUser = async (user_id) => {
        return await axios.get(`${process.env.REACT_APP_API}/singleuser/${user_id}`);
    }

    useEffect(() => {
        singleUser(id).then((res) => {
            setValue({ ...values, ...res.data })
        })
    }, [id])

    const updateUser = async (userData) => {
        return await axios.put(`${process.env.REACT_APP_API}/update/${id}`, userData);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { name, email, mobile, city, status, exp, link, plateform, plateform_link }
        console.log("1", data);
        updateUser(data).then((res) => {
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
                        <input style={inputStyle} type="text" name="name" value={name} onChange={handleChange} placeholder="Enter Name" required />
                    </div>
                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="email" value={email} onChange={handleChange} placeholder="Enter Email" required />
                    </div>
                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="mobile" value={mobile} onChange={handleChange} placeholder="Enter Mobile No." required />
                    </div>
                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="city" value={city} onChange={handleChange} placeholder="Enter City" required />
                    </div>

                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="exp" value={exp} onChange={handleChange} placeholder="Enter Experience" required />
                    </div>

                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="link" value={link} onChange={handleChange} placeholder="Enter Link" required />
                    </div>

                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="plateform" value={plateform} onChange={handleChange} placeholder="Enter Plateform / Refrence" required />
                    </div>

                    <div class="form-group my-3">
                        <input style={inputStyle} type="text" name="plateform_link" value={plateform_link} onChange={handleChange} placeholder="Enter Plateform Link" required />
                    </div>

                    <div class="form-group my-3">
                        <select style={inputStyle} name="status" value={status} onChange={handleChange} >
                            <option hidden>-- Select Status --</option>
                            <option value='pending'> Pending </option>
                            <option value="sent"> Sent </option>
                        </select>
                    </div>

                    <button type='submit' onClick={handleSubmit} class="btn btn-dark mx-1 my-3">Update</button>
                </form>
            </div>
            <div className='col-md-4'></div>
        </div>
    )
}

export default UpdateUser