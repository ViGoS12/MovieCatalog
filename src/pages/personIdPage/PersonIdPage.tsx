import styles from './PersonIdPage.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { fetchPerson } from '../../redux/slices/personIdSlice'
import { useAppDispatch } from '../../redux/store'

const MovieIdPage = () => {
  const router = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { person, loadingStatus } = useSelector(
    (state: RootState) => state.person
  )
  console.log(person)

  const getPerson = async () => {
    dispatch(fetchPerson(id ?? ''))
  }

  const clickPersonCard = (id: Movie['id']) => {
    router(`/person/${id}`)
  }

  useEffect(() => {
    getPerson()
  }, [id])

  return (
    <div className={styles.personIdPage}>
      <img src={person.image} alt='' />
    </div>
  )
}

export default MovieIdPage
