import React from 'react';
import '@/styles/navbar.scss';
import Searchbar from '../widgets/SearchBar';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/" className='font-bold'>Read</Link>
            </li>
            
            <li>
                <Link href="/blog-write" className='font-bold'>Write</Link>
            </li>
        </ul>

        <Searchbar />
    </nav>
  )
}

export default Navigation