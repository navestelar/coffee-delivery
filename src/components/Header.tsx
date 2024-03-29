import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import colors from 'tailwindcss/colors'

import Logotipo from '../assets/Logotipo.svg'
import { CoffeesContext } from '../contexts/CoffeeContext'
import Button from './ui/Button'

export default function Header() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <header className="container flex justify-between py-8">
      <NavLink to="/coffee-delivery/" title="Home">
        <h1 title="Coffee Delivery">
          <img src={Logotipo} alt="Logotivo coffee delivery" />
        </h1>
      </NavLink>
      <div className="flex gap-3">
        <div className="flex gap-1 rounded-md bg-purple-300 p-2">
          <MapPin size={22} color={colors.purple['500']} />
          <span className="text-sm text-purple-800">Porto Alegre, RS</span>
        </div>
        <NavLink to="/coffee-delivery/checkout" title="Checkout">
          <Button
            cartCount={Object.keys(coffees).length}
            icon={<ShoppingCart size={22} color={colors.yellow['800']} />}
            variant="quartenary"
          />
        </NavLink>
      </div>
    </header>
  )
}
