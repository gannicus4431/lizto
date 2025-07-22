import Navigation from '@/components/layout/Navigation'
import Hero1 from '@/components/home/Hero1'
import Hero2 from '@/components/home/Hero2'
import Hero3 from '@/components/home/Hero3'
import Hero4 from '@/components/home/Hero4'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Footer />
    </div>
  )
}