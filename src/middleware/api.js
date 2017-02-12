import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import { CALL_API } from '../actions/ActionTypes'

function buildOptions(httpMethod, actionData) {
  if (httpMethod == 'GET') { return {} }
  return {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(actionData)
  }
}

function makeRequest(endpoint, httpMethod, actionData) {
  const options = buildOptions(httpMethod, actionData)
  return fetch(endpoint, options)
  .then(response =>
    response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return camelizeKeys(json)
    })
}

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types, httpMethod, requestData } = callAPI

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types

  next(actionWith({ type: requestType }))

  return makeRequest(endpoint, httpMethod, requestData).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'something went wrong'
    }))
  )
}
