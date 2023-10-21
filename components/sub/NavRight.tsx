import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const NavRight = () => {
  return (
    <div>
        <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  )
}

export default NavRight