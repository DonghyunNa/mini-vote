import { Container, Navbar as RBNavbar } from 'react-bootstrap';

function Navbar() {
  return (
    <RBNavbar bg='light' className='border-bottom-1'>
      <Container>
        <RBNavbar.Brand href='/'>VOTE_지지</RBNavbar.Brand>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
