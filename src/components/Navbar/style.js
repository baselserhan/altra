import styled from 'styled-components';

export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
    height: 70px;
    `;

export const Logo = styled.div`
    width: 50%;
    float: left;

    @media(991px) {
        width: 100%;
        float: none;
    }
`;

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`;

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    margin-top: 10px;

    @media(991px) {
        width: 100%;
        float: none;
        margin-top: 20px;
        display: none;
    }
`;

export const ListItem = styled.li`
    display: inline-block;

    @media(991px) {
        display: block;
        text-align: center;
    }
    `;

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    transition: .5s;

    &:hover {
        color: #eb5424;
        transition: .5s;
    }
`;

