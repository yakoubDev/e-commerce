import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/sigin' className='flex items-center header-button'>
        Hello, Sign in
        </Link>

        <Link href={'/cart'} className='header-button'>
            <ShoppingCartIcon className='h-8 w-8'/>
            Cart
        </Link>
      </nav>
    </div>
  )
}