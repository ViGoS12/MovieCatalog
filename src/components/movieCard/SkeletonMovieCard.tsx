import ContentLoader from 'react-content-loader'

const SkeletonMovieCard: React.FC = () => (
  <ContentLoader
    className=''
    speed={2}
    width={162}
    height={280}
    viewBox='0 0 162 280'
    backgroundColor='#3c3e44'
    foregroundColor='#202329'>
    <rect x='0' y='260' rx='4' ry='4' width='163' height='18' />
    <rect x='0' y='0' rx='18' ry='18' width='163' height='240' />
  </ContentLoader>
)

export default SkeletonMovieCard
