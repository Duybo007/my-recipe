import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Pages from './Pages'
import Modal from '../components/modal'


export default function Home() {
  return (
    <div >
      <Head>
        <title>My Recipe</title>
      </Head>
      <Header/>
      <div>
        <Pages/>
      </div>
      <Feed/>
      <Modal/>
    </div>
  )
}
