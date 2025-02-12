import type React from "react"

interface VideoPlayerProps {
  src: string
  title: string
  horientation: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, horientation }) => {
  const aspect = horientation === 'vertical' ? "w-[320px] h-[570px] rounded-lg shadow-lg" : "aspect-w-16 aspect-h-9 rounded-lg shadow-lg" ;
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="elegant-heading text-2xl sm:text-3xl mb-4 text-center">{title}</h2>
      {/* <div className={aspect}>
        <video className="w-full h-full object-cover rounded-lg shadow-lg" controls preload="metadata">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="flex justify-center items-center">
        <video 
          src={src}  // Cambia esto por la ruta de tu video
          controls 
          autoPlay={false}
          loop={false}
          className={aspect}
        />
      </div>
    </div>
  )
}

export default VideoPlayer

