import { Header } from '../src/components/Header/Header'
import './App.css'
import { Hero } from './components/Hero/Hero'
import { CardSection } from './components/CardSection/CardSection'
import { CardSection2 } from './components/CardSection/CardSection2'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header
        brandName={{ name: 'SuperwindUI', link: '/superwindCSS' }}
        menuList={[{ name: 'docs', link: '/docs' }, { name: 'blog', link: '/blog' }]}
        color={'black'} height={'70'}
      />
      <Hero
        heroTitle={'SuperwindUI'}
        heroText={'次世代のUライブラリ、軽量で学習コストも低い'}
        heroImage={'/superwindui.png'}
        heroBtn={{ name: '詳細を見る', link: '/more', color: "white", bgColor: "navy" }}
      />
      <CardSection
        sectionTitle={'Features'}
        cardList={[
          { title: '超速での開発', text: '自由度を下げることにより、超速での開発を実現', image: '/superwindui.png' },
          { title: '初心者', text: 'ドキュメントのわかりやすさ、パラメータの少なさから初心者おすすめ', image: '/superwindui.png' },
          { title: '見やすい', text: 'コードが見やすく、日本人作成によりドキュメントが読みやすい', image: '/superwindui.png' }
        ]}
      />
      <CardSection2
        bgColor={'white'}
        sectionTitle={'Created By'}
        cardList={[
          { title: 'S.Yamamoto', text: 'Frontend', image: '/superwindui.png', snsList: [{ name: 'twitter', link: '/twitter', icon: '/twitter.svg' }, { name: 'instagram', link: '/instagram', icon: '/instagram.svg' }, { name: 'threads', link: '/threads', icon: '/threads.svg' }] },
          { title: 'M.Hayasi', text: 'Backend', image: '/superwindui.png', snsList: [{ name: 'x', link: '/twitter', icon: '/x-twitter.svg' }, { name: 'instagram', link: '/instagram', icon: '/instagram.svg' }, { name: 'threads', link: '/threads', icon: '/threads.svg' }] },
          { title: 'R.Sasahara', text: 'Designer', image: '/superwindui.png' }
        ]}
      />
      <Footer brandName={'SuperwindUI'} bgColor={'#eee'} />
    </>
  )
}

export default App
