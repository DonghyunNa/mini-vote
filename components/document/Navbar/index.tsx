import Image from 'next/image';
import { Container, Navbar as RBNavbar } from 'react-bootstrap';

function Navbar() {
  return (
    <RBNavbar bg='dark'>
      <Container>
        <RBNavbar.Brand href='#home'>
          <Image
            src='/logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='logo'
          />
        </RBNavbar.Brand>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
