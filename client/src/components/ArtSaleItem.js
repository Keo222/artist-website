import React from 'react';

import styled from 'styled-components';

const SaleDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 5rem auto;
  height: 50rem;
  padding-bottom: 5rem;
  border-bottom: 2px solid #333;
`

const SaleInfoDiv = styled.div`
  width: 30%;
  font-size: 1.6rem;
  text-align: center;
`

const ArtTitle = styled.h4`
  font-size: 4rem;
  margin-bottom: 2rem;
`

const Price = styled.h5`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 8rem;
  margin-bottom: 1rem;
`

const AddToCartButton = styled.div`
  width: 15rem;
  height: 5rem;
  font-weight: 700;
  border-radius: 20px;
  background: yellowgreen;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem;
  margin: 0 auto;
  cursor: pointer;
`

const PartialHR = styled.hr`
  width: 80%;
`

const ImgDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
`

const ArtImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`

function ArtSaleItem({name, desc, price, pic, id, setAddCartButton}) {
  return (
    <SaleDiv>
      <SaleInfoDiv>
        <ArtTitle>{name}</ArtTitle>
        <p>{desc}</p>
        <PartialHR />
        <Price>${price}</Price>
        <AddToCartButton onClick={() => setAddCartButton(id)}>Add to Cart</AddToCartButton>
      </SaleInfoDiv>
      <ImgDiv>
        <ArtImg src={pic}/>
      </ImgDiv>
    </SaleDiv>
  )
}

export default ArtSaleItem
