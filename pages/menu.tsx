import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Banner1 from '@/components/menu/Banner1'
import Banner2 from '@/components/menu/Banner2'

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <Banner1/>
      <Banner2/>
      <Footer />
    </div>
  )
}