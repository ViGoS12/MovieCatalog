import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header} id='home'>
      {/* <img className={styles.header__logo} src={Logo} alt='' /> */}
      <ul className={styles.header__list}>
        <li>
          <Link to='/' className={styles.header__item}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
