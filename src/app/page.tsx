import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Button from "@/components/Button";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Homework 2 Basic Next',
    description: 'Homework 2 Basic Next',
};

const posts = [
    "Post_1",
    "Post_2",
    "Post_3",
];

export default function Home() {
  return (
      <>
          <nav>
              <ul>
                  <Link href={"/about"}>About Page</Link>
                  {posts.map((post) => (
                        <Link key={post} href={`/posts/${post}`}><li>{post}</li></Link>
                  ))}
              </ul>
          </nav>
          <h1>Homework 2 Basic Next</h1>
          <Button>
              Very useful button
          </Button>
          <Image src={"/next.svg"} alt={"next logo"} width={300} height={300} />
          <Script src={"/myscript.js"} />
      </>
  )
}
