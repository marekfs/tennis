import Timer from './timer'
import Quote from './quote'

const App = () => (
  <div id='app'>
    <div class='flex flex-col mx-auto justify-center bg-blue-500 h-screen px-5'>
      <div class='column-1'>
        <h1 class='font-sans font-bold italic text-3xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>
          Countdown to Tennis Season
        </h1>
        <Timer />
        <Quote />
      </div>
    </div>
  </div>
)

export default App
