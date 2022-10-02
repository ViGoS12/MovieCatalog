import styles from './scss/ErrorPage.module.scss'

interface IErrorPageProps {
  errorMessage?: string
}

const ErrorPage: React.FC<IErrorPageProps> = ({ errorMessage }) => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__title}>Error</div>
      <div className={styles.errorPage__subtitle}>
        The requested page was not found
        {errorMessage ? <div>Api Error: {errorMessage}</div> : ''}
      </div>
    </div>
  )
}

export default ErrorPage
