import React from 'react';

import styled from 'styled-components';

// const SaleDiv = styled.div`
//   width: 80%;
//   height: 40rem;
//   display: flex;
//   background: linear-gradient(to bottom, #999, #aaa, #777);
//   box-shadow: 0 10px 20px 10px rgba(0,0,0,.15);
//   margin: 5rem auto;
//   border-radius: 10px;
//   overflow: hidden;
//   color: #333;
// `

// // Art Image
// const ArtContainer = styled.div`
//   width: 30%;
//   display: flex;
// `
// const ArtImg = styled.img`
//   max-width: 30rem;
//   margin: auto;
// `

// // Art Details
// const ArtInfoContainer = styled.div`
//   width: 50%;
//   text-align: center;
//   margin: auto;
// `

// const ArtInfo = styled.p`
//   font-size: 1.6rem;
// `

// // Art Price
// const ArtPriceContainer = styled.div`
//   width: 20%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const Price = styled.p`
//   display: block;
//   font-size: 1.6rem;
//   font-weight: 700;
//   flex-basis: 50%;
//   margin: auto;
//   margin-top: 40%;
// `

// const AddToCartContainer = styled.div`
//   display: flex;
//   flex-basis: 50%;
//   /* align-items: center; */
//   gap: 2rem;
// `

// const AddToCartText = styled.p`
//   font-size: 1.6rem;
//   line-height: 3rem;
// `

// const AddToCartButton = styled.div`
//   font-size: 3rem;
//   color: yellowgreen;
//   margin-top: 1rem;
// `

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

function ArtSaleItem({name, desc, price, pic, id, cart, setAddCartButton}) {
  return (
    // <>
    // <SaleDiv>
    //   <ArtContainer>
    //     <ArtImg src={screamPic} />
    //   </ArtContainer>
    //   <ArtInfoContainer>
    //     <ArtInfo>
    //       This is Scream!! It is famous and the guy looks real scared.
    //     </ArtInfo>
    //   </ArtInfoContainer>
    //   <ArtPriceContainer>
    //     <Price>$30.00</Price>
    //     <AddToCartContainer>
    //       <AddToCartText>
    //         Add to Cart
    //       </AddToCartText>
    //       <AddToCartButton>
    //         <FontAwesomeIcon icon={faCartPlus} />
    //       </AddToCartButton>
    //     </AddToCartContainer>
    //   </ArtPriceContainer>
    // </SaleDiv>
    // </>
    <>
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
    {/* <SaleDiv>
      <SaleInfoDiv>
        <ArtTitle>Mona Lisa</ArtTitle>
        <p>Print of Mona Lisa</p>
        <PartialHR />
        <Price>$40</Price>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </SaleInfoDiv>
      <ImgDiv>
        <ArtImg src={monaLisaPic}/>
      </ImgDiv>
    </SaleDiv>
    <SaleDiv>
      <SaleInfoDiv>
        <ArtTitle>Watermelon</ArtTitle>
        <p>Print of Watermelon</p>
        <PartialHR />
        <Price>$40</Price>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </SaleInfoDiv>
      <ImgDiv>
        <ArtImg src={watermelonPic}/>
      </ImgDiv>
    </SaleDiv> */}
    </>
  )
}

export default ArtSaleItem
