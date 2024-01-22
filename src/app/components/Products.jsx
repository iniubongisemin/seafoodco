import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react'

export const seafoods = [
    {
      name: "crayfish",
      type: "crayfish",
      image: "/images/crayfish.jpg",
      description: "Delicious, small crustaceans that add a mouthwatering aroma and flavor to dishes.",
      id: 1,
      price: 5000
    },
    {
      name: "scallops",
      type: "scallops",
      image: "/images/scallops.jpg",
      description: "Fresh and flavorful scallops, a seafood delicacy.",
      id: 2,
      price: 7500
    },
    {
      name: "african_lobster",
      type: "lobsters",
      image: "/images/african_lobster.jpg",
      description: "Indulge in succulent African Lobster, a delicacy for any occasion.",
      id: 3,
      price: 8500
    },
    {
      name: "barracuda",
      type: "fish",
      image: "/images/barracuda.jpg",
      description: "Tender and fresh Barracuda, perfect for grilling enthusiasts.",
      id: 4,
      price: 5500
    },
    {
      name: "oysters",
      type: "oysters",
      image: "/images/oysters.jpg",
      description: "Briny and refreshing fresh oysters, ideal for raw seafood enthusiasts.",
      id: 5,
      price: 9500
    },
    {
      name: "tiger_prawns",
      type: "prawns",
      image: "/images/tiger_prawns.jpg",
      description: "Succulent Tiger Prawns, can be marinated in garlic and butter, ready to cook.",
      id: 6,
      price: 10000
    },
    {
      name: "mud_crabs",
      type: "crabs",
      image: "/images/mud_crabs.jpg",
      description: "Premium mud crab meat and spices.",
      id: 7,
      price: 7000
    },
    {
      name: "tilapia",
      type: "fish",
      image: "/images/tilapia.jpg",
      description: "Rich and smoky Tilapia fillets, perfect for appetizers and salads.",
      id: 8,
      price: 5000
    },
    {
      name: "river_prawns",
      type: "prawns",
      image: "/images/river_prawns.jpg",
      description: "Spicy Cajun-style River Prawns, a flavorful seafood experience.",
      id: 9,
      price: 6000
    },
    {
      name: "ring_squid",
      type: "squids",
      image: "/images/ring_squid.jpg",
      description: "Tender Ring Squid can be cooked in a delectable white wine and garlic sauce.",
      id: 10,
      price: 8000
    },
    {
      name: "blue_swimmer_crab",
      type: "crabs",
      image: "/images/blue_swimmer_crab.jpg",
      description: "Delicious Blue Swimmer Crab, perfect for seafood lovers.",
      id: 11,
      price: 6500
    },
    {
      name: "rock_crab",
      type: "crabs",
      image: "/images/rock_crab.jpg",
      description: "Hard-shelled Rock Crab, known for its sweet and tender meat.",
      id: 12,
      price: 7200
    },
    {
      name: "crawfish",
      type: "crawfish",
      image: "/images/crawfish.jpg",
      description: "Small, freshwater crustaceans similar to small lobsters, often used in stews and soups.",
      id: 13,
      price: 5200
    },
    {
      name: "trout",
      type: "fish",
      image: "/images/trout.jpg",
      description: "Freshwater fish known for its delicate flavor and tender flesh.",
      id: 14,
      price: 5800
    },
    {
      name: "croaker",
      type: "fish",
      image: "/images/croaker.jpg",
      description: "Silver-skinned fish with a mild, sweet flavor, often used in soups and stews.",
      id: 15,
      price: 9000
    },
    {
      name: "giant_snail",
      type: "snail",
      image: "/images/giant_snail.jpg",
      description: "Tender Giant Snail, ideal for grilling or adding to soups.",
      id: 16,
      price: 7500
    },
    {
      name: "catfish",
      type: "fish",
      image: "/images/catfish.jpg",
      description: "Freshwater fish known for its rich, fatty flesh, commonly used in Nigerian cuisine.",
      id: 17,
      price: 5500
    },
    {
      name: "tiger_prawns",
      type: "prawns",
      image: "/images/tiger_prawns.jpg",
      description: "Juicy Prawns perfect for cooking in a mouthwatering garlic butter sauce.",
      id: 18,
      price: 8500
    },
    {
      name: "rainbow_tilapia",
      type: "fish",
      image: "/images/rainbow_tilapia.jpg",
      description: "Delicate Rainbow Tilapia fillet, perfect for baking or grilling.",
      id: 19,
      price: 6500
    },
    {
      name: "african_squid_ink",
      type: "seafood_ink",
      image: "/images/african_squid_ink.jpg",
      description: "Exquisite African Squid Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
      id: 20,
      price: 9500
    },
    {
      name: "cuttlefish_ink",
      type: "seafood_ink",
      image: "/images/cuttlefish_ink.jpg",
      description: "Exquisite cuttlefish Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
      id: 21,
      price: 9500
    }
  ];

//&#8358; css:\20A6 => Naira symbol


export default function Products() {
    const [products, setProducts] = useState([])

    async function getProduct() {
      const response = await fetch('https://dummyjson.com/products') // fetch the products
      const data = await response.json() // convert the response to json
      setProducts(data.products) // set the products in the state to the products we fetched  
    } 

    useEffect(() => {
      getProducts()
    }, [])

  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      {/* <div className="flex justify-between items-center px-20 py-5">
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {
          products.map{product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg px-10">
          <Image src={product.thumbnail} alt={product.title} className='rounded-md h-48'/>
          <div className="mt-4">
              <p className='text-lg uppercase font-bold'></p>
              <p></p>
          </div>
        </div>
          )}
        }
      </div> */}
    </div>
  )
}
