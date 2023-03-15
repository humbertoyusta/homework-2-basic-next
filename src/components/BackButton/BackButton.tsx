"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.back()}>Go back!</Button>
    );
}

export default BackButton;