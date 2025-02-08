'use client';
import Link from "next/link";
import { useRouter } from "next/navigation"; // เติมตรงนี้
import { useState, useEffect } from "react"; // เติมตรงนี้
import Swal from "sweetalert2"; // เติมตรงนี้

export default function Sidebar() {
    const router = useRouter(); // เติมตรงนี้
    const [userId, setUserId] = useState(''); // เติมตรงนี้

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId !== null) { // เติมตรงนี้
            setUserId(userId);
        }
    }, []);

    const handleSignOut = async () => {
        const button = await Swal.fire({
            title: 'ยืนยันการออกจากระบบ',
            text: 'คุณต้องการออกจากระบบหรือไม่?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true
        })

        if (button.isConfirmed) {
            localStorage.removeItem('userId'); // ทำลายข้อมูล userId ที่อยู่ใน localStorage
            router.push('/settings'); // นำทางไปที่หน้า settings
        }
    }

    return (
        userId === '' ? <></> : // เติมตรงนี้
            <div className="sidebar">
                <div className="mb-5">
                    <div>
                        <i className="fa-solid fa-user mr-2"></i>
                        Tavon Seesenpila
                    </div>
                    <div className="mt-2">
                        <button className="button-red"
                            onClick={handleSignOut}>
                            <i className="fa-solid fa-times mr-2"></i>
                            Sign Out
                        </button>
                    </div>
                </div>
                <Link href="/settings/user">
                    <i className="fa-solid fa-user mr-2"></i>
                    User
                </Link>
                <Link href="/settings/system">
                    <i className="fa-solid fa-gear mr-2"></i>
                    System
                </Link>
                <Link href="/settings/display">
                    <i className="fa-solid fa-display mr-2"></i>
                    Display
                </Link>
            </div>
    );
}