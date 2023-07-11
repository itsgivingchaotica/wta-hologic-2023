import '@styles/globals.css'

export const metadata = {
    title:'2023 Hologic WTA Tour',
    description:'Find results for women\'s professional tennis worldwide'
}
const RootLayout = () => {
  return (
  <html Lang='en'>
    <body>
      <div className='main'>
        <div className='gradient'>

        </div>
      </div>
      <main className='app'>
      {children}
      </main>
    </body>
  </html>
  )
}

export default RootLayout