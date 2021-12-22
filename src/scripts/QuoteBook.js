import {Quotes} from './quotes.js'
import {postQuote} from './dataAccess.js'

document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target
    if(itemClicked.id === "submitQuote") {
      const quote = document.getElementById("input--quote").value
      const author = document.getElementById("input--author").value
      //code to add the quote to the database
      window.alert(`${quote} by ${author}`)
      // const quote = {
      //   quote: document.getElementById("input--quote").value,
      //   author: document.getElementById("input--author").value
      // }
      // postQuote(quote)
    }
  }
)


export const QuoteBook = () => {

  return  `
    <h1>E17's Quote Book</h1>
    <article>
      <section>
        <input id="input--quote" type="text" placeholder="Type your quote here" />
        <input id="input--author" type="text" placeholder="Type the author here" />
        <button id="submitQuote">Submit Quote</button>
      </section>
      <section>
        <h2>Quotes</h2>
        ${Quotes()}
      </section>
    </article>
  `
}