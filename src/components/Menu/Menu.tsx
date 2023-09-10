import { Link } from 'react-router-dom'
import * as Styles from './Menu.styles'
import logo from '@assets/icons/logo.svg'

export const Menu = () => {
  const routes = [
    {
      label: 'Como fazer',
      to: '/como-fazer',
    },
    {
      label: 'Ofertas',
      to: '/ofertas',
    },
    {
      label: 'Depoimentos',
      to: '/depoimentos',
    },
    {
      label: 'Vídeos',
      to: '/videos',
    },
    {
      label: 'Meu carrinho',
      to: '/meu-carrinho',
    },
  ]

  return (
    <Styles.Header>
      <Styles.Image src={logo} alt="logo" />
      <nav>
        <Styles.ListMenu>
          {routes.map((route, index) => (
            <Styles.ListMenuItem key={index}>
              <Link to={route.to}>{`${route.label}`}</Link>
              {`${index == routes.length - 1 ? '' : '/'}`}
            </Styles.ListMenuItem>
          ))}
        </Styles.ListMenu>
      </nav>
    </Styles.Header>
  )
}
