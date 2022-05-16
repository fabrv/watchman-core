import ReactMarkdown from 'react-markdown'
import ColorHash from 'color-hash'

export interface TextAndTagsProps {
  text?: string
  tags?: string[]
  tagsColour?: string
}

export const TextAndTags = ({ text, tags, tagsColour }: TextAndTagsProps) => {
  const colorHash = new ColorHash()
  return (
    <>
      {
        text && text !== '' && (
          <ReactMarkdown>{text}</ReactMarkdown>
        )
      }
      {tags?.map((tag, i) => {
        const [r, g, b] = colorHash.rgb(tag)
        return (
          <span key={i} className='tag' style={{ backgroundColor: tagsColour || `rgba(${r},${g},${b},0.6)` }}>{tag}</span>
        )
      })}
    </>
  )
}
