import { Link, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../api'

function PostDetails() {
  const { id } = useParams()
  const { data, error, isLoading } = useGetPostQuery(id!)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    if ('message' in error) {
      return <div>Error: {error.message}</div>
    } else {
      return <div>Error occurred</div>
    }
  }
  if (!data) {
    return null
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <Link to="/placeholder-rtk/">Back</Link>
    </div>
  )
}

export default PostDetails
