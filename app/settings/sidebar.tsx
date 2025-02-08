'use client';
import Link from "next/link";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link href="/settings/user">User</Link>
            <Link href="/settings/system">System</Link>
            <Link href="/settings/display">Display</Link>
        </div>
    );
}