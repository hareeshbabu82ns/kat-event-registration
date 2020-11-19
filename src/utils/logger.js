export const log = ({ key = 'logger', data }) => {
  if (process.env.NODE_ENV === 'development')
    console.log(key, ': ', data)
}

