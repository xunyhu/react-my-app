import Provider from './components/Provider'
import connectAdvanced from './components/connectAdvanced'
import { ReactReduxContext } from './components/Context'
import connect from './connect/connect'

import { useDispatch, createDispatchHook } from './hooks/useDispatch'
import { useSelector, createSelectorHook } from './hooks/useSelector'
import { useStore, createStoreHook } from './hooks/useStore'

import { setBatch } from './utils/batch'
import { unstable_batchedUpdates as batch } from './utils/reactBatchedUpdates'
import shallowEqual from './utils/shallowEqual'

setBatch(batch)


/**
 * react-redux 导出API分析
 * 
 * Provider  通过React.createContext()创建了一个Context对象，返回一个Provider组件,它允许消费组件订阅context的变化。
 * 并且往Provider组件内传入了store、subscription两个value
 * 
 * connect 
 * 
 */
export {
  Provider,
  connectAdvanced,
  ReactReduxContext,
  connect,
  batch,
  useDispatch,
  createDispatchHook,
  useSelector,
  createSelectorHook,
  useStore,
  createStoreHook,
  shallowEqual,
}
