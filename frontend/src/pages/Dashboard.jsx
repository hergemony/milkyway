import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import ArtForm from './components/ArtForm'
// import ArtItem from './components/ArtItem'
// import Spinner from './components/Spinner'
//import { getArts, reset } from './features/Arts/ArtSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { Arts, isLoading, isError, message } = useSelector(
    (state) => state.Arts
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

   // dispatch(getArts())

    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, isError, message, dispatch])

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Arts Dashboard</p>
      </section>

      {/* //<ArtForm /> */}

      <section className='content'>
        {Arts.length > 0 ? (
          <div className='Arts'>
            {/* {Arts.map((Art) => (
              <ArtItem key={Art._id} Art={Art} />
            ))} */}
          </div>
        ) : (
          <h3>You have not set any Arts</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard