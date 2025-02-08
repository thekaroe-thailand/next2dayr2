import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-5">
                {children}
            </div>
        </div>
    );
}

