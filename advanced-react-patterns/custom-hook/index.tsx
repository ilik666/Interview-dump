import { type FC, useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        setError(error?.message)
      })
      .finally(() => setLoading(false))
  }, [url])

  return {
    data,
    error,
    loading
  }
}

export const DataComponent: FC<{ url: string }> = ({ url }) => {
  const { data, error, loading } = useFetch(url)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error && !loading) return <div>Error: {error}</div>

  return <div>{data}</div>
}
