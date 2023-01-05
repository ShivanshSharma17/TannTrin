import { Inter } from '@next/font/google'
import Nav from './common/nav'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })
const images=[{img:"wallet.png",name:"Wallet"},{img:"backpack.png",name:"Backpack"},
              {img:"briefcase.png",name:"Briefcase"},{img:"handbag.png",name:"Handbag"},
              {img:"hoodie.png",name:"Hoodie"},{img:"jeans.png",name:"Jeans"},
              {img:"pokebag.png",name:"Pokebag"},{img:"purses.png",name:"Purses"},
              {img:"scarf.png",name:"Scarf"},{img:"shoppingbag.png",name:"Shoppingbag"}
             ];

export const getStaticProps = async () =>{
  const res=await fetch('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json');
  const data=await res.json();
  const { data: { products } }=data; //destructing
  return {
    props: { products }
}
}

export default function Home({ products }) {
  return (
    <div className='textcolor'>
    <Nav/>
      <span className='flex-row'>
        {images.map((imgdata)=>{
          // const [image,name]=imgdata;
          return(
            <div className='flex-col pd-30' key={imgdata.name}>
              <Image src={`/${imgdata.img}`} width="70" height="70"></Image>
              <span className='centre'> {imgdata.name} </span>
            </div>
          )
        })

        }
        {/* <Image className='pd-30' src="/wallet.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/backpack.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/briefcase.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/handbag.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/hoodie.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/jeans.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/pokebag.png" width="70" height="70"></Image>
        <Image className='pd-30'src="/purses.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/scarf.png" width="70" height="70"></Image>
        <Image className='pd-30' src="/shoppingbag.png" width="70" height="70"></Image> */}
      </span>
    <div className='flex-row'>
    {products.map((prod)=>{
      const { image = [],id,name,price,}=prod;
      const imageSrc=image[0]||''
      return (
        <div key={id} className='flex-col pd-30' >
          <Image className='pdleftright' alt={name} src={`${imageSrc}`} width={220} height={260}></Image>
          <span style={{maxWidth: '250px'}}>{name.split(0,15)}</span>
          <span className='space' >₹  {price}<FontAwesomeIcon icon={faShoppingCart}/></span>
        </div>
      )
    })}
    </div>
      
    </div>
  )
}
