const Timer = () => {
  return(
    //<h1 >{`${days}D ${hours}H ${ minutes}m ${seconds}s`}</h1>
    <div class='flex justify-center gap-2 md:gap-3 lg:gap-4'>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <p class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>0</p>
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>days</h1>
      </div>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <p class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>0</p>
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>h</h1>
      </div>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <p class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>0</p>
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>m</h1>
      </div>
      <div class='flex gap-x-1 lg:gap-x-2'>
      <p class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>0</p>
      <h1 class='font-mono text-2xl md:text-4xl lg:text-6xl text-yellow-200 pt-10 text-center'>s</h1>
      </div>
    </div>
  )
}

export default Timer