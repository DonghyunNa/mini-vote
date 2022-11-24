import { Container, Navbar as RBNavbar } from 'react-bootstrap';

function Navbar() {
  return (
    <RBNavbar bg='light' className='border-bottom-1'>
      <Container>
        <RBNavbar.Brand href='/'>이것은 커뮤니티형 투표 서비스의 시범 버전</RBNavbar.Brand>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
