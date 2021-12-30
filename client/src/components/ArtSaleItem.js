import React, {useState} from 'react';

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
  color: #222;
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
  color: #222;
  background: yellowgreen;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #222;
    color: yellowgreen;
    /* box-shadow: 0 5px 10px 4px rgba(0,0,0,.3); */
    /* transform: translateY(-2px); */
  }
`
const AddedToCartButton = styled.div`
  width: 15rem;
  height: 5rem;
  font-weight: 700;
  border-radius: 20px;
  color: #222;
  background: #bbb;
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
  const [loading, setLoading] = useState(false);

  const loadingClick = () => {
    console.log("poop")
    setAddCartButton(id)

    console.log(loading)
    setLoading(true);
    console.log(loading)
    setTimeout(() => setLoading(false), 700);
    // setTimeout(setLoading(prevLoading => !prevLoading), 5000);
    // console.log(loading)
  }

  return (
    <SaleDiv>
      <SaleInfoDiv>
        <ArtTitle>{name}</ArtTitle>
        <p>{desc}</p>
        <PartialHR />
        <Price>${price}</Price>
        {loading ? 
          <AddedToCartButton>Added to Cart...</AddedToCartButton>
        :
          <AddToCartButton onClick={() => loadingClick()}>Add to Cart</AddToCartButton>
        }
      </SaleInfoDiv>
      <ImgDiv>
        <ArtImg src={pic}/>
      </ImgDiv>
    </SaleDiv>
  )
}

export default ArtSaleItem
