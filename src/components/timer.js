import { useState, useEffect } from 'preact/hooks'

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
    <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>{`${days}D ${hours}H ${ minutes}m ${seconds}s`}</h1>
  )
}

export default Timer