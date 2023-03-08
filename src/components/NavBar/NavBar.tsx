import styled from 'styled-components'

// styled components
const StyledNav = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    z-index: 999;
    background: radial-gradient(
        circle,
        ${({ theme }) => theme.colors.orange},
        ${({ theme }) => theme.colors.mandarin}
    );
    display: flex;
    justify-content: center;
`
const NavBar = () => {
    return (
        <StyledNav>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="50"
                viewBox="0 0 80 50"
            >
                <path d="M29.059 22.684v9.273h2.414v-9.371h6.78v-2.207H31.36c-2.3 0-2.3 2.305-2.3 2.305Zm23.105 7.066v-9.371h-2.418v9.273s0 2.32 2.305 2.32h6.89V29.75ZM41.82 18.055h-2.418v11.597c0 2.32 2.274 2.32 2.274 2.32h6.922V29.75H41.82v-7.164h6.778v-2.207H41.82Zm0 0" />
            </svg>
        </StyledNav>
    )
}

export default NavBar
