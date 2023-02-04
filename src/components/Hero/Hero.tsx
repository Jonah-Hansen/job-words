import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <p>analyze job postings to extract keywords</p>
      <p>see how the keywords rank against related posts</p>

      <Link href='/analyze' >Let&apos;s Get Started</Link>
    </div>
  )
}