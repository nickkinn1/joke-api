(async () => {
    questionP = document.querySelector("#question")
    answerP = document.querySelector("#answer")
    jokeButton = document.querySelector("button")

    questionP.textContent = ""
    answerP.textContent = ""


    jokeButton.addEventListener("click", async () => {
        const randomJoke = await fetch("/api/v1/random-joke")
        const { id, joke, punchline} = await randomJoke.json()

        questionP.textContent = joke
        answerP.textContent = punchline
    })
})()