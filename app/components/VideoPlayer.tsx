import type React from "react"

interface VideoPlayerProps {
  src: string
  title: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="elegant-heading text-2xl sm:text-3xl mb-4 text-center">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <video className="w-full h-full object-cover rounded-lg shadow-lg" controls preload="metadata">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoPlayer

