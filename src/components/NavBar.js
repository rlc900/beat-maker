import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


  class NavBar extends React.Component {
    state = { activeItem: 'bio' }
    handleItemClick = (e, { name }) => {
      // console.log('you clicked me')
      this.setState({ activeItem: name })
}

    render() {
      const { activeItem } = this.state
        return (
          <Menu tabular className = 'menu'>
            <Menu.Item>
              <Link to ='/dubstep'>Dubstep</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ='/house'>House</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ='/lofi'>Lo-fi</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to ='/db'>Drum and Bass</Link>
            </Menu.Item>
          </Menu>
        )
      }
    }

export default NavBar

//
// const NavBar = () => {
//
//   const [activeItem, setActiveItem] = useState('bio')
//
// return (
//   <div>
//         <Menu attached='top' tabular>
//           <Menu.Item
//             name='bio'
//             active={activeItem === 'bio'}
//             onClick={({e, name}) => setActiveItem(name)}
//           />
//           <Menu.Item
//             name='photos'
//             active={activeItem === 'photos'}
//             onClick={({e, name}) => setActiveItem(name)}
//           />
//     </Menu>
//   </div>
//   )
// }
