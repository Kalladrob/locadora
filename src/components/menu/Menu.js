import React, { useState } from "react";
import { OuterWrapper,
         Title,
         LinkWrapper,
         Button,
         Icon,
         Text,
         Selected } from './MenuStyled';
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
    
    const { pathname } = useLocation();
    

    return(
        <OuterWrapper>
            <Title>Projeto Locadora</Title>
            <LinkWrapper>
                <NavLink to="/clients" style={{textDecoration: 'none', activeStyle: {}}}>
                    <Button>
                        <Selected style={{backgroundColor: "/clients" === pathname ? '#2F80ED' : '#F8F9F8'}} />
                        <Icon icon="face" style={{color: "/clients" === pathname ? '#2F80ED' : '#A5A7A7'}} />
                        <Text style={{color: "/clients" === pathname ? '#000000' : '#A5A7A7'}}>Clientes</Text>
                    </Button>
                </NavLink>
                <NavLink to="/movies" style={{textDecoration: 'none'}}>
                    <Button>
                        <Selected style={{backgroundColor: "/movies" === pathname ? '#2F80ED' : '#F8F9F8'}} />
                        <Icon icon="theaters" style={{color: "/movies" === pathname ? '#2F80ED' : '#A5A7A7'}}/>
                        <Text style={{color: "/movies" === pathname ? '#000000' : '#A5A7A7'}}>Movies</Text>
                    </Button>
                </NavLink>
                <NavLink to="/rentals" style={{textDecoration: 'none'}}>
                    <Button>
                        <Selected style={{backgroundColor: "/rentals" === pathname ? '#2F80ED' : '#F8F9F8'}} />
                        <Icon icon="swap_horiz" style={{color: "/rentals" === pathname ? '#2F80ED' : '#A5A7A7'}} />
                        <Text style={{color: "/rentals" === pathname ? '#000000' : '#A5A7A7'}}>Locações</Text>
                    </Button>
                </NavLink>
            </LinkWrapper>
        </OuterWrapper>
    );

}

export default Menu;