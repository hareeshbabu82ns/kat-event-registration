import queryString from 'query-string'

export const LOG_LEVEL_DEBUG = 'debug'
export const LOG_LEVEL_ERROR = 'error'
export const LOG_LEVEL_WARNING = 'warn'
export const LOG_LEVEL_INFO = 'info'

export const log = ({ key = 'logger', level = LOG_LEVEL_DEBUG, data }) => {
  // if (process.env.NODE_ENV === 'development')
  const queryParams = queryString.parse(window?.location?.search)
  if (!queryParams || (!queryParams.log && !queryParams.logKey))
    return

  // log all if queryParam is DEBUG
  // else only log when queryParam matches level
  if (queryParams.log === LOG_LEVEL_DEBUG ||
    queryParams.log === level || key.startsWith(queryParams.logKey))
    console.log(key, `:(${level}): `, data)
}

