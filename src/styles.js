import styled from 'styled-components'

export const About = styled.div`
 min-height: 90vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 3rem 10rem;
 color: white;

`;

export const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-size: 2.5rem;
    font-weight: lighter;
}

`;

export const Image= styled.div`
flex: 1;
z-index: 2;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
    z-index: 2;
}


`;