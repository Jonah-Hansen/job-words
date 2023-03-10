import { FormEvent, useState } from "react";
import stopWords from '../../../public/stopWords.json';

export default function PasteBin() {

  const [post, setPost] = useState<string>('')
  const [keywords, setKeywords] = useState<string[]>([])

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label >
          paste your job posting here
          <textarea onChange={(e) => setPost(e.currentTarget.value)} />
        </label>
        <button type="submit" >Analyze</button>
      </form>

      <ul>
        {keywords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </>
  )

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setKeywords(analyzePost(post));
  }

  function analyzePost(post: string) {
    const keywords = post.toLowerCase().split(' ').filter(word => (
      !stopWords.includes(word)
    ))
    return keywords
  }

}