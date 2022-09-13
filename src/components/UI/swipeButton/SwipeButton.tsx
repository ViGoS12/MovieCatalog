import styles from './SwipeButton.module.scss'

import { useSwiper } from 'swiper/react'
import classNames from 'classnames'

type SwipeButtonProps = {
  image: string
  direction: string
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ image, ...props }) => {
  const swiper = useSwiper()

  const swipeDirection = (direction: string) => {
    switch (direction) {
      case 'next':
        swiper.slideNext()
        swiper.slideNext()
        swiper.slideNext()
        swiper.slideNext()
        break
      case 'prev':
        swiper.slidePrev()
        swiper.slidePrev()
        swiper.slidePrev()
        swiper.slidePrev()
    }
  }

  return (
    <button
      onClick={() => swipeDirection(props.direction)}
      className={classNames(styles.btn, {
        [styles.btn__prev]: props.direction === 'prev',
        [styles.btn__next]: props.direction === 'next',
      })}>
      <img src={image} alt='' />
    </button>
  )
}

export default SwipeButton
