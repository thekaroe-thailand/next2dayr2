'use client'
import { useState } from "react"; // ใช้ useState จาก react
import { useRouter } from "next/navigation"; // ใช้ useRouter เพื่อนำทางหน้าเว็บ
import Swal from "sweetalert2"; // ใช้ Swal เพื่อแสดงข้อความของการเข้าสู่ระบบผิดพลาด

export default function Page() {
    const [username, setUsername] = useState(''); // กำหนด username เป็นค่าว่าง
    const [password, setPassword] = useState(''); // กำหนด password เป็นค่าว่าง
    const router = useRouter(); // ใช้ useRouter เพื่อนำทางหน้าเว็บ
    const handleSignIn = () => {
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('userId', '1'); // เติมตรงนี้
            router.push('/settings/user'); // นำทางไปที่หน้า user
        } else {
            Swal.fire({
                title: 'ตรววจสอบ username',
                text: 'username ไม่ถูกต้อง',
                icon: 'error',
                timer: 2000 // 2 วินาที
            })
        }
    }
    return (
        <div className="signIn">
            <div className="box">
                <h1>Sign In</h1>
                <div>
                    <div>Username</div>
                    <input onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <div>Password</div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="button-blue" onClick={handleSignIn}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
