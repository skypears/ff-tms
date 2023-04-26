// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
// import redir
import { useEffect } from 'react';
import { useRouter } from 'next/router'
// funtion to redirect to dashboard page
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard')
  }, [])
}