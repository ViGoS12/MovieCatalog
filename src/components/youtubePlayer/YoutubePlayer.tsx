import YouTube, { YouTubeProps } from 'react-youtube'

interface IYoutubePlayerProps {
  videoId: string
  height?: string
  width?: string
  autoplay?: boolean
  volume?: number
}

const YoutubePlayer: React.FC<IYoutubePlayerProps> = ({
  videoId,
  height = '400',
  width = '720',
  autoplay = true,
  volume = 0,
}) => {
  const youtubeOptions: YouTubeProps['opts'] = {
    height: height,
    width: width,
    playerVars: {
      autoplay: autoplay,
    },
  }
  return (
    <YouTube
      videoId={videoId}
      opts={youtubeOptions}
      onReady={(event) => event.target.setVolume(volume)}
    />
  )
}

export default YoutubePlayer
