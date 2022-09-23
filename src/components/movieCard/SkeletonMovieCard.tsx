import ContentLoader from 'react-content-loader'

// const MyLoader = (props) => (
const SkeletonMovieCard: React.FC = () => (
  <ContentLoader
    speed={2}
    width={105}
    height={210}
    viewBox='0 0 105 210'
    backgroundColor='#3c3e44'
    foregroundColor='#202329'>
    {/* {...props}> */}
    <rect x='5' y='183' rx='4' ry='4' width='93' height='8' />
    <rect x='0' y='165' rx='4' ry='4' width='103' height='9' />
    <rect x='0' y='0' rx='18' ry='18' width='103' height='149' />
  </ContentLoader>
)

export default SkeletonMovieCard
