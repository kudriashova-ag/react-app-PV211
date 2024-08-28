import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
    const user = useLoaderData();

    return (
        <div>
            <h1>User {params.id} {user.name}</h1>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
        </div>
    );
}

export default User;
