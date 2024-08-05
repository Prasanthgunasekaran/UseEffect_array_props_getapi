import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GetApi = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userdata = async () => {
            try {
                const response = await fetch("https://reqres.in/api/user");
                const data = await response.json();
                setUser(data.data);
            } catch (error) {
                console.log("Error");
            } finally {
                setLoading(false);
            }
        }; userdata();
    });
    if (loading) {
        return <div> Loading ...</div>
    } if (error) {
        return <div> Error ...</div>
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>pantone_value</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((users) => (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.year}</td>
                            <td>{users.color}</td>
                            <td>{users.pantone_value}</td>
                        </tr>))}
                </tbody>
            </table>

            <br/>
            <Link to={'/array'}>Array</Link><br/>
            <Link to={'/props'}>Props</Link>

        </div>
    )
};



export default GetApi;


// import React, { useState, useEffect } from 'react';

// const GetApi = () => {
//     const [user, SetUser] = useState();
//     useEffect(() => {
//         const userdata = async () => {
//             try {
//                 const response = await fetch("https://reqres.in/api/users");
//                 const data = await response.json();
//                 SetUser(data.data);
//                 console.log(data);
//             }
//             catch (error) {
//                 console.log("error");
//             }
//         }; userdata();

//     });
//     return (
//         <div>
//             <table>
//                 <thead>
//                     <th>
//                         <tr>
//                             <th>Name</th>
//                             <th>Year</th>
//                         </tr>
//                     </th>
//                 </thead>
//                 <tbody>
//                     {user?.map((users) =>(
//                         <tr key={users.id}>
//                             <td>{users.name}</td>
//                             <td>{users.year}</td>
//                         </tr>))}
//                 </tbody>
//             </table>
//         </div>
//     )
// };
// export default GetApi;