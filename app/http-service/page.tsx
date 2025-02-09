'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Page() {
    const url = 'http://localhost:3001'; // url ที่จะเรียกใช้งาน
    const [users, setUsers] = useState([]); // ประกาศตัวแปร users เพื่อเก็บข้อมูลจาก api
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const fetchData = async () => {
        const response = await axios.get(`${url}/user/list`);
        setUsers(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async () => {
        const payload = {
            name: name,
            username: username,
            password: password
        }

        if (id !== '') {
            await axios.put(`${url}/user/update/${id}`, payload);
            setId('');
        } else {
            await axios.post(`${url}/user/create`, payload);
        }
        fetchData();
    }

    const handleDelete = async (id: number) => {
        await axios.delete(`${url}/user/remove/${id}`);
        fetchData();
    }

    const handleEdit = async (id: number) => {
        const user = users.find((user: any) => user.id === id) as any;
        setName(user.name);
        setUsername(user.username);
        setPassword(user.password);
        setId(user.id);
    }

    return (
        <div>
            <h1>User Management</h1>

            <div>
                <div>name</div>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <div>username</div>
                <input value={username} onChange={(e) => setUsername(e.target.value)} />

                <div>password</div>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />

                <div className="mt-3">
                    <button onClick={handleSave}>
                        Add User
                    </button>
                </div>
            </div>

            <table className="w-full mt-3">
                <thead className="bg-gray-300">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>password</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}