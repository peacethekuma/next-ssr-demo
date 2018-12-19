import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>SSR Magician</h1>
      <Link href='/about'><button>buttonbout</button></Link>
      <Link href='/robots'><button>Robots</button></Link>
    </div>
  )
}

export default Index;