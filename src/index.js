import { store, createActionInc, createActionDec } from './store'

console.log('Hello in headless counter app!')

const incHandler = (delta = 1) => { store.dispatch(createActionInc(delta)) }
const decHandler = (delta = 1) => { store.dispatch(createActionDec(delta)) }

const listener = () => render()

store.subscribe(listener)

const render = () => {
  const currentState = store.getState()
  const { number } = currentState
  console.log(`Current number is ${number}`)
}

window.inc = incHandler
window.dec = decHandler

render()
