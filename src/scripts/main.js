import { fetchQuotes } from './dataAccess.js';
import {QuoteBook} from './QuoteBook.js'

const maincontainer = document.getElementById("app");

maincontainer.addEventListener(
  "stateChanged",
  customEvent => {
      render()
  }
)

const render = () => {
  fetchQuotes().then(
      () => {
        maincontainer.innerHTML = QuoteBook()
      }
  )
}

render()