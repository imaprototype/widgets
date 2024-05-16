"use client"

interface ReadingTimeProps {
  text: string
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ text }) => {

  const wordsPerMinute = 200 // The average reading speed of an adult is between 200 and 250 words per minute
  const words = text.split(/\s+/).length // Split by whitespace and count words
  const minutes = Math.ceil(words / wordsPerMinute)

  return (
    <p>
      Estimated reading time: {minutes} min{minutes !== 1 ? "s" : ""}
    </p>
  )
}

export default ReadingTime
