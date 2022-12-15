import { useState, useEffect } from 'preact/hooks'
import ReactTextTransition, { presets } from "react-text-transition"

const Timer = () => {
  const tennisTime = new Date('2023-03-05T10:00:00.0000-05:00')

  const now = new Date()
  const [ms, setMs] = useState(tennisTime.getTime() - now.getTime())
  const [days, setDays] = useState(ms.days)
  const [hours, setHours] = useState(ms.hours)
  const [minutes, setMinutes] = useState(ms.minutes)
  const [seconds, setSeconds] = useState(ms.seconds)

  const createCountdown = (ms) => {
    setSeconds(((ms % 60000) / 1000).toFixed(0))
    setMinutes((Math.floor(ms / 60000)) % 60)
    setHours((Math.floor(ms / 3600000)) % 24)
    setDays((Math.floor(ms / 86400000)))
    setMs(ms-1000)
  }

  useEffect(() => {
    createCountdown(ms)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      createCountdown(ms)
    }, 1000)
    return () => clearInterval(interval)
  },[days, hours, minutes, ms, seconds])

  return(
    //<h1 >{`${days}D ${hours}H ${ minutes}m ${seconds}s`}</h1>
    <div class='flex justify-center gap-2 md:gap-3 lg:gap-4'>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <ReactTextTransition
        className='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'
        children={days}
        springConfig={presets.gentle}
      />
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>days</h1>
      </div>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <ReactTextTransition
        className='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'
        children={hours}
        springConfig={presets.gentle}
      />
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>h</h1>
      </div>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <ReactTextTransition
        className='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'
        children={minutes}
        springConfig={presets.gentle}
      />
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>m</h1>
      </div>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <ReactTextTransition
        className='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'
        children={seconds}
        springConfig={presets.gentle}
      />
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>s</h1>
      </div>
    </div>
  )
}

export default Timer