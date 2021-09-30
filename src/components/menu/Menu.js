import React from "react";
import { OuterWrapper,
         Title,
         LinkWrapper,
         Button,
         Icon,
         Text,
         Selected } from './MenuStyled';
import { Link } from "react-router-dom";

const Menu = () => {

    return(
        <OuterWrapper>
            <Title>Projeto Locadora</Title>
            <LinkWrapper>
                <Link to="/clients" style={{textDecoration: 'none'}}>
                    <Button>
                        <Selected></Selected>
                        <Icon icon="face"/>
                        <Text>Clientes</Text>
                    </Button>
                </Link>
                <Link to="/movies" style={{textDecoration: 'none'}}>
                    <Button>
                        <Selected></Selected>
                        <Icon icon="theaters"/>
                        <Text>Movies</Text>
                    </Button>
                </Link>
                <Link to="/clients" style={{textDecoration: 'none'}}>
                    <Button>
                        <Selected></Selected>
                        <Icon icon="swap_horiz"/>
                        <Text>Locações</Text>
                    </Button>
                </Link>
            </LinkWrapper>
        </OuterWrapper>
    );

}

export default Menu;