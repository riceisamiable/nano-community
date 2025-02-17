import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import { appReducer } from './app'
import { docsReducer } from './docs'
import { postsReducer } from './posts'
import { postlistsReducer } from './postlists'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    docs: docsReducer,
    posts: postsReducer,
    postlists: postlistsReducer
  })

export default rootReducer
