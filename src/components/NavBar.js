// import React, { useState } from 'react';
import React from 'react';
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
          <Menu tabular>
            <Menu.Item
              name='Dubstep'
              active={activeItem === 'Dubstep'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='House'
              active={activeItem === 'House'}
              onClick={this.handleItemClick}
            />
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
