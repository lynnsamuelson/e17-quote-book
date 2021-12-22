const applicationState = {}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#app")

export const fetchQuotes = () => {
  return fetch(`${API}/quotes`)
      .then(response => response.json())
      .then(
          (quotes) => {
              // Store the external state in application state
              applicationState.quotes = quotes
          }
      )
}

export const postQuote = (newQuote) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuote)
  }

      return fetch(`${API}/quotes`, fetchOptions)
      .then(response => response.json())
      .then(() => {
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
      })
  }

  export const patchQuote = (editedQuote) => {
  const fetchOptions = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedQuote)
  }

      return fetch(`${API}/quotes/${editedQuote.id}`, fetchOptions)
      .then(response => response.json())
      .then(() => {
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
      })
  }


export const getQuotes = () => {
  return applicationState.quotes
}