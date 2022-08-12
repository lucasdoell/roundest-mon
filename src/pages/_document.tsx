import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='dark:bg-gray-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}