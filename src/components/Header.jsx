import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header className='bg-teal-950 text-white shadow-md brightness-90 p-3 sm:py-5 sm:px-12'>
        <div className='flex justify-between items-center max-w-x6l mx-auto'>
            <Link to='/'>
                <h1 className='font-bold text-base md:text-3xl flex flex-wrap opacity-85'>
                    <span>Expense</span>
                    <span>Tracker</span>
                </h1>
            </Link>

            <ul className='flex gap-4 opacity-85 text-sm sm:text-base font-normal sm:font-medium'>
                <Link to='/'>
                    <li className='hidden sm:inline hover:underline cursor-pointer'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline hover:underline'>About</li>
                </Link>
                <Link to='/contact'>
                    <li className='hover:underline'>Contact</li>
                </Link>
            </ul>

            <ul className='flex gap-4 opacity-85 text-sm sm:text-base font-normal sm:font-medium'>
                <Link to='/signin'>
                    <li className='hover:underline'>Signin</li>
                </Link>
                <Link to='/signup'>
                    <li className='hover:underline cursor-pointer'>Signup</li>
                </Link>
            </ul>      
        </div>
      </header>
    </div>
  )
}
