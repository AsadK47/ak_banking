'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AuthForm = ({ type }: { type: string }) => {
  const [user, setfirst] = useState(null)

  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
          <Link href="/" className="cursor-pointer items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Arc logo"
            />
            <h1 className="text-26 ibm-plex-serif font-bold text-black-1">
              Arc
            </h1>
          </Link>
          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
              {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
              <p className='text-16 fron-normal text-gray-600'>
                {user ? 'Link your account to get started': 'Please enter your details'}

              </p>
            </h1>
          </div>
      </header>
      {user ? (
        <div className='flex flex-col gap-4'>
          {/* PlaidLink */}
        </div>
      ): (
        <>
          FORM
        </>
      )}
    </section>
  )
}

export default AuthForm