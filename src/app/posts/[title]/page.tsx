import { Metadata } from "next";
import BackButton from "@/components/BackButton";

export function generateMetadata({ params }: {params: {title: string}}): Metadata {
    return { title: params.title };
}

export default function Post({params}: {params: {title: string}}) {

    return (
        <>
            <h1>{params.title}</h1>
            <BackButton />
        </>
    );
}