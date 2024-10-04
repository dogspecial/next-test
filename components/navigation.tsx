"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/member">Member</Link></li>
                <li><Link href="/works">Works</Link></li>
            </ul>
        </nav>
    )
}