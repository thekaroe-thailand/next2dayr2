import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>
                <Link href="/settings/user">User</Link>
                <Link href="/settings/system">System</Link>
                <Link href="/settings/display">Display</Link>
            </div>

            {children}
        </div>
    );
}

