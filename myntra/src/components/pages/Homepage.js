import React, { useEffect, useRef, useState } from 'react';
import ProductTwo from '../../images/productTwo.webp';
import ProductThree from '../../images/productThree.webp';
import ProductFour from '../../images/productFour.webp';
import ProductFive from '../../images/productFive.webp';
import ProductSix from '../../images/productSix.webp';
import ProductSeven from '../../images/productSeven.webp';
import ProductEight from '../../images/productEight.webp';
import ProductNine from '../../images/productNine.webp';
import Product from '../templates/ProductComponent';
import '../UI/atoms/BRAND/brand.css';
import '../pages/HomePage.css';
import DropDown from '../UI/atoms/DROPDOWNS/dropDown';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/UI/atoms/LABEL/label.css';
import '../templates/categories.css';
import FilterComponent from '../templates/FilterComponent';
import Radio from '../UI/atoms/RADIO/RadioComponent';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';



const HomePage = () => {
  const refPrimary = useRef();
  const[Materials,setMaterials] = useState([]);
  const [productName,setProductName] = useState('');
  const [productNameSecondary,setProductNameSecondary] = useState('');

  var Products = [];
  var Categories =[];


    const myState = useSelector((State) => State);
    console.log(myState);
    const dispatch = useDispatch();
    


 

  const hoverHandler = () => {
     console.log(refPrimary);
     if(refPrimary.current.classList!='flip-vertical'){
      refPrimary.current.classList.add('flip-vertical');
     }

     else{
           console.log( refPrimary.current.className.remove('flip-vertical'));
           }
     }
    //  useEffect(() => {
    //   axios.get(`https://demo7303877.mockable.io/`)
    //   .then((res) => {
    //     console.log(res);
    //     Products = res.data.products;
    //    setMaterials(res.data.products);
    //     console.log(Products);
    //     Products.map((current, index) => {
    //       console.log(current.category);
    //        setProductName(current.category);
    //        setProductNameSecondary(current.category);
    //        Categories = current.category;
           
    //     });
    //     console.log(Categories);
    //     console.log(res.data.products[0].additionalInfo);
    //   })
    //   .catch((err) => {
    //     console.log(err.Message);
    //   } )
    //  },[Categories]);  
  
    return(
        <>
        <div className='shift-down'>
          <Container className="no-margin" fluid>
            <Row>
              <Col lg={3} className='filter-row horizontal-line'>
              <p className=' brand-font '>FILTERS</p>
              </Col>
              <Col lg={6} className='flex filter-row horizontal-line' >
                <div className='flex'>
                <div className="hover-class" ref={refPrimary} onClick={hoverHandler}>
                <span className='label-font padding'>Bundle</span>
                <i class="fa fa-angle-down"></i>
                </div>
                <div className="hover-class">
                <span className='label-font padding'>Country of Origin</span>
                <i class="fa fa-angle-down"></i>
                </div>
                <div className="hover-class">
                <span className='label-font padding'>Size</span>
                <i class="fa fa-angle-down"></i>
                </div>
                </div>
              </Col>
              <Col lg={3} className='filter-row horizontal-line sort-box'>
                Sort by :
                <span><b> Recommended</b></span>
                <span> <i class="fa fa-angle-down"></i></span>
              </Col>
            </Row>
            <Row>
              <Col lg={3} >
               <div className="vertical-line" >
               <p className='brand-font '>{'GENDER'}</p> 
               <div >
               <Radio identityName={'Men'} radioValue={'Men'} labelValue={'Men'} 
               actionType='MEN'
               />
               </div>
               <div >
               <Radio identityName={'Women'} radioValue={'Women'} labelValue={'Women'} 
                actionType='WOMEN'
               />
              </div> 
               <div >
               <Radio identityName={'Boys'} radioValue={'Boys'} labelValue={'Boys'} 
                actionType='BOYS'
               />
              </div> 
               <div className="horizontal-line">
               <Radio identityName={'Girls'} radioValue={'Girls'} labelValue={'Girls'} 
               actionType='GIRLS'
               />
              </div> 
              </div> 
               <div className="horizontal-line vertical-line">
               <FilterComponent filterType={'CATEGORIES'}/>
              </div> 
               <div className="horizontal-line vertical-line">
               <FilterComponent filterType={'BRAND'}/>
              </div> 
               <div className="horizontal-line vertical-line">
               <FilterComponent filterType={'PRICES'}/>
              </div> 
               <div className="horizontal-line vertical-line">
               <FilterComponent filterType={'COLOUR'}/>
              </div> 
               <div className="horizontal-line vertical-line">
               <FilterComponent filterType={'DISCOUNT RANGE'}/>
              </div> 
              </Col>
              <Col lg={9}>
              <Row>
               <Col lg={3}>
               <Product brandName={myState.brandOne} brandType={myState.typeOne} discountedPrice={myState.discountedPrice} productStrike={myState.productStrike} discountPercentage={myState.discountPercentage} productImage={myState.productOne}/>
              </Col>  
               <Col lg={3}>
               <Product brandName={myState.brandTwo}  brandType={myState.typeTwo}  discountedPrice={myState.discountedPrice} productStrike={myState.productStrike} discountPercentage={myState.discountPercentage} productImage={myState.productTwo}/>
              </Col>  
               <Col lg={3}>
               <Product brandName={myState.brandThree} brandType={myState.typeThree} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productThree}/>
              </Col>  
               <Col lg={3}>
               <Product brandName={myState.brandFour} brandType={myState.typeFour} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productFour}/>
              </Col>  
              </Row> 
              <Row>
              <Col lg={3}>
              <Product brandName={myState.brandFive}   brandType={myState.typeFive} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productFive}/>
              </Col>
              <Col lg={3}>
              <Product brandName={myState.brandSix}   brandType={myState.typeSix} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productSix}/>
              </Col>
              <Col lg={3}>
              <Product brandName={myState.brandSeven}  brandType={myState.typeSeven} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productSeven}/>
              </Col>
              <Col lg={3}>
              <Product brandName={myState.brandEight}  brandType={myState.typeEight} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productEight}/>
              </Col>
              </Row>
              <Row>
              <Col lg={3}>
               <Product brandName={myState.brandNine}  brandType={myState.typeNine} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productNine}/>
              </Col>  
               <Col lg={3}>
               <Product brandName={myState.brandTen}   brandType={myState.typeTen} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productTen}/>
              </Col>  
               <Col lg={3}>
               <Product brandName={myState.brandEleven}  brandType={myState.typeEleven} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productEleven}/>
              </Col>  
               <Col lg={3}>
               <Product brandName={myState.brandTwelve}  brandType={myState.typeTwelve} discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productTwelve}/>
              </Col>
              </Row>
              <Row>
              <Col lg={3}>
              <Product brandName={myState.brandThirteen}  brandType={myState.typeThirteen}  discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productThirteen}/>
              </Col>
              <Col lg={3}>
              <Product brandName={myState.brandFourteen}  brandType={myState.typeFourteen}  discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productFourteen}/>
              </Col>
              <Col lg={3}>
              <Product brandName={myState.brandFifteen}  brandType={myState.typeFifteen}  discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productFifteen}/>
              </Col>
              <Col lg={3} className='horizontal-line-end'>
              <Product brandName={myState.brandSixteen}  brandType={myState.typeSixteen}  discountedPrice="100" productStrike="250" discountPercentage="25" productImage={myState.productSixteen}/>
              </Col>
              </Row> 
              <Row>
                {
                  Products.map((currentValue, index) => {
                    let brandName= currentValue.category;
                    <Product brandName={brandName} key={index} brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductNine}/>

                  })
                }
              </Row>
              </Col> 
            </Row>
        </Container>
        </div>
        </>
    );
}

export default HomePage;
