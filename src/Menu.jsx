const Menu = () => {

    return (
        <div>
            <NavBar bg="light" expand "lg">
                <Nav className="me-auto"> 
                    <Nav.Link href = {"/"}> Pokemons </Nav.Link>
                                        <Nav.Link href = {"#"}> ViaCep </Nav.Link>
                                        </Nav>
                                            
                <ul>
                    <li>
                        <a href = {"/"}>Pokemons </a>
                     </li>
                     <li>
                        <a href={"#"}>ViaCep</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;