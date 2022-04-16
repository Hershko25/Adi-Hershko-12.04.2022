import React from 'react';
import SearchBar from '../Search/SearchBar';
import styled from 'styled-components';




const HeroSectionPage=styled.section`
 height: 40vh;
`;

export default function HeroSection() {
  return (
    <HeroSectionPage >
          <SearchBar/>
    </HeroSectionPage>
  )
}
