"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>List of profiles using router</h1>
            <ul>
                <li onClick={() => router.push("/profile/1")}>Profile 1</li>
                <li onClick={() => router.push("/profile/2")}>Profile 2</li>
                <li onClick={() => router.push("/profile/3")}>Profile 3</li>
            </ul>

            <h1>List of profiles using Link</h1>
            <ul>
                <Link href='/profile/1'>Profile 1</Link>
                <Link href='/profile/2'>Profile 2</Link>
                <Link 
                    scroll={false}
                    prefetch={true}
                    href={{
                        pathname: "/profile/3",
                        query: {
                            userName: "Alex",
                        },
                    }}
                >
                    Profile 3
                </Link>
            </ul>
        </div>
    );  
}