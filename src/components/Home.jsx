import Menu from './Menu'
import Container from 'react-bootstrap/Container';
import MyCard from './Card';


function Home() {
    return (
        <>
            <Menu />
            <Container fluid className='d-flex justify-content-center'>
                <MyCard
                    image="./src/assets/img/cake.jpg"
                    title="Bienvenido a "
                    titleStrong="Happy Cake"
                    description="El lugar de los pasteles felices"
                />
            </Container>

        </>
    )
}

export default Home
