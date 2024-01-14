import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const ListUser = () => {

    const [data, setdata] = useState([]);

    const userList = async () => {
        return await axios.get(`${process.env.REACT_APP_API}/userlist`);
    }


    useEffect(() => {
        userList().then((res) => {
            setdata(res.data)
        })
    }, []);


    return (
        <React.Fragment>

            <div className='d-flex justify-content-around bg-black py-5 w-100'>
                <div className='text-start fs-4 text-white fw-bold' style={{ letterSpacing: "0.5rem" }}> IT Companies  </div>
                <div> <Link to="/createuser" className='text-start fs-4 text-white fw-bold text-decoration-none' style={{ letterSpacing: "0.2rem" }}> Create</Link></div>
            </div>
            <div className='w-100'>

                <Table data={data} userList={userList}/>
            </div>

        </React.Fragment>
    )
}

const Table = ({data,userList}) => {

   
    const handleDelete = async (id) => {
        console.log(id);
        let confirmation = window.confirm("Delete or Not");
        if (confirmation)
            await axios.delete(`${process.env.REACT_APP_API}/remove/${id}`).then((res) => {
                if (res.data) {
                    userList()
                }
            }).catch((err) => {
                console.log(err);
            })
    }



    return (
        <table className="table">
            <thead className='bg-dark shadow text-white'>
                <tr>
                    <th scope="col" className='py-3'>#</th>
                    <th scope="col" className='py-3'>Name</th>
                    <th scope="col" className='py-3'>Email</th>
                    <th scope="col" className='py-3'>Phone</th>
                    <th scope="col" className='py-3'>City</th>
                    <th scope="col" className='py-3'>Experience</th>
                    <th scope="col" className='py-3'>Plateform</th>
                    <th scope="col" className='py-3'>Plateform Link</th>
                    <th scope="col" className='py-3'>Career Link</th>
                    <th scope="col" className='py-3'>Status</th>
                    <th scope="col" className='py-3'>Date</th>
                    <th scope="col" className='py-3'>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white shadow'>
                {
                    data.map((users, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row" className='small'> {index + 1}</th>
                                <td className='small'>{users.name}</td>
                                <td className='small'>{users.email}</td>
                                <td className='small'>{users.mobile}</td>
                                <td className='small'>{users.city}</td>
                                <td className='small'>{users.exp}</td>

                                <td className='small'>
                                    {users.link ? <a href={users.plateform_link} className='text-success fw-bold'> Link  </a> : "none"}
                                </td>

                                <td className='small'>{users.plateform}</td>

                                <td className='small'>
                                    {users.link ? <a href={users.link} className='text-success fw-bold text-decoration-none'>Apply </a> : "none"}
                                </td>



                                <td className='small'>{users.status}</td>
                                <td className='small'>{new Date(users.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <div className='d-flex'>
                                        <Link to={`/updateuser/${users._id}`} className='text-decoration-none me-2 text-success'> <i class="fa-solid fa-pen"></i> </Link>
                                        <button onClick={() => handleDelete(users._id)} className='border-0 bg-white ms-2 text-danger'><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}


export default ListUser