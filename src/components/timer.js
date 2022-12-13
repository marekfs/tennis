import { useState, useEffect } from 'preact/hooks'

const Timer = () => {
  const tennisTime = new Date('2023-03-05T10:00:00.0000-05:00')

  const now = new Date()
  const countdown = (tennisTime.getTime() - now.getTime())
  const [days, setDays] = useState(countdown.days)
  const [hours, setHours] = useState(countdown.hours)
  const [minutes, setMinutes] = useState(countdown.minutes)
  const [seconds, setSeconds] = useState(countdown.seconds)

  const createCountdown = (ms) => {
    setSeconds(Math.floor((ms % 6e4) / 1000))
    setMinutes(Math.floor((ms % 36e5) / 6e4))
    setHours(Math.floor((ms % 36e6) / 6e4))
    setDays(Math.floor(ms / (1000*60*60*24)))
  }

  createCountdown(countdown)

  useEffect(() => {
    const interval = setInterval(() => {
      createCountdown(countdown)
    }, 1000)
    return () => clearInterval(interval)
  },[days,hours,minutes,seconds])

  return(
    <div class='flex flex-col mx-auto justify-center bg-blue-500 h-screen'>
      <div class='column-1'>
        <h1 class='font-sans text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>
          Countdown to Tennis Season
        </h1>
        <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>{`${days}D ${hours}H ${ minutes}m${seconds}s`}</h1>
      </div>
    </div>
  )
}

export default Timer