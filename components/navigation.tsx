"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    console.log(path);
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link>{path === '/' ? '♥️' : ''}</li>
                <li><Link href="/dashboard">Dashboard</Link>{path === '/dashboard' ? '♥️' : ''}</li>
                <li><Link href="/member">Member</Link>{path === '/member' ? '♥️' : ''}</li>
                <li><Link href="/works">Works</Link>{path === '/works' ? '♥️' : ''}</li>
            </ul>
        </nav>
    )
}