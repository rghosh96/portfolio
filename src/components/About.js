import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'

const About = (props) => {
    return (
      <div className="about-container" >
        <div className="diamond-header">
              <Diamond className="diamond2"></Diamond>
              <Diamond className="diamond2"></Diamond>
              <Diamond className="diamond2"></Diamond>
            </div>
        <h2>about</h2>
        <p>born in queens, NY, grew up in north/northwest Arkansas. </p>
        <p>24 years old (oct 1 1996)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eu nisi a posuere. Vivamus laoreet lectus nulla, in vehicula purus porta sit amet. Nulla et dapibus nulla. Vestibulum at justo id tortor fermentum gravida eget ut diam. Morbi vel mi arcu. Aliquam efficitur elementum dolor, vitae ullamcorper ante fringilla viverra. Proin rhoncus cursus mattis. Proin pulvinar nunc ligula, non dictum sem sagittis sit amet.

Aenean condimentum, orci eget tristique laoreet, ante purus pretium diam, sit amet placerat lacus metus a nisi. Nunc egestas eros sit amet quam imperdiet efficitur. Morbi ut purus consequat, commodo ante vitae, accumsan augue. Donec commodo lectus est. Sed condimentum nec felis in iaculis. Aenean convallis molestie lobortis. Nullam maximus ut sem a pulvinar. Morbi velit sapien, scelerisque quis accumsan in, fermentum vitae nibh. Pellentesque scelerisque est at lectus ornare tristique. Duis convallis auctor est, ac blandit mauris mollis et.

Ut aliquet arcu magna, a dictum purus tempus et. Ut urna risus, tincidunt dapibus porta quis, faucibus eu metus. Morbi vel tellus dui. Donec egestas, felis vitae fringilla maximus, quam libero pellentesque massa, sit amet fermentum arcu velit vitae ex. Vivamus tincidunt porta mattis. Fusce hendrerit facilisis lectus non laoreet. Proin finibus rutrum orci eget semper. Quisque imperdiet ultricies convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ornare arcu quis finibus rhoncus. Donec iaculis aliquam purus sit amet gravida. Aenean varius pellentesque varius.

</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eu nisi a posuere. Vivamus laoreet lectus nulla, in vehicula purus porta sit amet. Nulla et dapibus nulla. Vestibulum at justo id tortor fermentum gravida eget ut diam. Morbi vel mi arcu. Aliquam efficitur elementum dolor, vitae ullamcorper ante fringilla viverra. Proin rhoncus cursus mattis. Proin pulvinar nunc ligula, non dictum sem sagittis sit amet.

Aenean condimentum, orci eget tristique laoreet, ante purus pretium diam, sit amet placerat lacus metus a nisi. Nunc egestas eros sit amet quam imperdiet efficitur. Morbi ut purus consequat, commodo ante vitae, accumsan augue. Donec commodo lectus est. Sed condimentum nec felis in iaculis. Aenean convallis molestie lobortis. Nullam maximus ut sem a pulvinar. Morbi velit sapien, scelerisque quis accumsan in, fermentum vitae nibh. Pellentesque scelerisque est at lectus ornare tristique. Duis convallis auctor est, ac blandit mauris mollis et.

Ut aliquet arcu magna, a dictum purus tempus et. Ut urna risus, tincidunt dapibus porta quis, faucibus eu metus. Morbi vel tellus dui. Donec egestas, felis vitae fringilla maximus, quam libero pellentesque massa, sit amet fermentum arcu velit vitae ex. Vivamus tincidunt porta mattis. Fusce hendrerit facilisis lectus non laoreet. Proin finibus rutrum orci eget semper. Quisque imperdiet ultricies convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ornare arcu quis finibus rhoncus. Donec iaculis aliquam purus sit amet gravida. Aenean varius pellentesque varius.

</p>
      </div>
    )
  }

  const AboutPage = withTheme(About);
  export default AboutPage;
