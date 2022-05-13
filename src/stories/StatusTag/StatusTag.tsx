export interface StatusTagsProps {
  finished: boolean
  duration: number
  labels: Record<string, string>
}

export const StatusTag = ({ finished, duration, labels }: StatusTagsProps) => {
  return (
    finished
      ? <span className='tag' style={{ backgroundColor: 'var(--bs-success-opaque)' }}>{ labels.finished }</span>
      : ((duration / 3.6e6) < 8
          ? <span className='tag' style={{ backgroundColor: 'var(--bs-blue-opaque)' }}>{ labels.running }</span>
          : <span className='tag' style={{ backgroundColor: 'var(--bs-danger-opaque)' }}>{ labels.overtime }</span>)
  )
}
