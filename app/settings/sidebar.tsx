'use client';
import Link from "next/link";
import { useRouter } from "next/navigation"; // เติมตรงนี้
export default function Sidebar() {
    const router = useRouter(); // เติมตรงนี้
    return (
        <div className="sidebar">
            <div className="mb-5">
                <div>
                    <i className="fa-solid fa-user mr-2"></i>
                    Tavon Seesenpila
                </div>
                <div className="mt-2">
                    <button className="button-red"
                        onClick={() => router.push('/settings')}>
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