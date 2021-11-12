import styled from "styled-components";
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom'


export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 24px;
    color: #2F80ED;
    width: 139px;
    padding-left: 53px;
    text-align: center;
`
export const LinkWrapper = styled.div`
    border-radius: 15px;
    background-color: #F8F9F8;
    height: 310px;
    width: 255px;
    padding-top: 30px;
    margin-bottom: 23px;
`

export const Button = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    text-decoration: none;
`

export const Icon = styled(MaterialIcon)`
    padding-right: 27px;
    padding-left: 25px;
`

export const Text = styled.h1`
    font-size: 16px;
    height: 19px;
    line-height: 2px;    
`

export const Selected = styled.div`
    height: 34px;
    width: 6.77px;
`

export const CustomLink = styled(Link)`

`