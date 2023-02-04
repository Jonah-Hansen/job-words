
export default function KeywordsList(words: string[]) {
  return (
    <ul>
      {words.map((word, index) => (
        <li key={index}>word</li>
      ))}
    </ul>
  )
}