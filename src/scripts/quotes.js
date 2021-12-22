import { getQuotes, patchQuote } from "./dataAccess.js"

document.addEventListener("click", (event) => {
  if(event.target.id.startsWith('quoteBtn')) {
    const quoteId = parseInt(event.target.id.split('--')[1])
    let edit = document.getElementById('edit')
    const quote = document.getElementById(`quote--${quoteId}`)
    const quoteText = quote.innerText.split("\"")[1]
    edit.innerHTML = `<p>Edit Quote</p><input id="editQuote--${quoteId}" value="${quoteText}" /><button id="editQuoteBtn--${quoteId}">Edit Quote</button>`
  }
  if(event.target.id.startsWith('editQuoteBtn')) {
    //Neet to get new quote, the quoteId and submit quote here
    const quoteId = parseInt(event.target.id.split('--')[1])
    const newQuote = document.getElementById(`editQuote--${quoteId}`).value
    const updatedQuote = {
      id: quoteId,
      quote: newQuote
    }
    patchQuote(updatedQuote)
  }
})

export const Quotes = () => {
  const quotes = getQuotes()
  let html = '<ul>'

  const quotesList = quotes.map(quote => {
    // return `<li id="quote--${quote.id}">${quote.author}: "${quote.quote}"</li>`
    return `<li id="quote--${quote.id}">
        ${quote.author}: "${quote.quote}"
        <button id="quoteBtn--${quote.id}">Edit</button>
      </li>`
  }).join('')
  
  html += quotesList
  html += '</ul>'
  
  return html
}