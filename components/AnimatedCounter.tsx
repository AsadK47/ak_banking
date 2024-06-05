'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp 
        decimal='.' 
        prefix='£'
        duration={6}
        decimals={2}
        end={amount} 
      />
    </div>
  )
}

export default AnimatedCounter