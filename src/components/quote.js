import quotes from '../data/quotes'

const qotd = quotes[Math.floor(Math.random() * quotes.length)]

const Quote = () => {

  return(
    <div class="pt-10">
      <h1 class='font-sans font-extralight text-xl md:text-2xl lg:text-3xl text-yellow-200 text-center'>{qotd.text}</h1>
      <h1 class='font-sans font-extralight text-xl md:text-2xl lg:text-3xl text-yellow-200 pt-2 text-center'>{`- ${qotd.author}`}</h1>
    </div>
  )
}

export default Quote