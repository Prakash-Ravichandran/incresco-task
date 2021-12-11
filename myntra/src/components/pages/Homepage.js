import React, { useRef } from 'react';
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


const HomePage = () => {
  const refPrimary = useRef();

  const hoverHandler = () => {
     console.log(refPrimary);
     if(refPrimary.current.classList!='flip-vertical'){
      refPrimary.current.classList.add('flip-vertical');
     }

     else{
           console.log( refPrimary.current.className.remove('flip-vertical'));
           }
     }
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
               <div >
               <p className='brand-font'>{'GENDER'}</p> 
               <Radio identityName={'Men'} radioValue={'Men'} labelValue={'Men'} />
              </div> 
               <div >
               <Radio identityName={'Women'} radioValue={'Women'} labelValue={'Women'} />
              </div> 
               <div >
               <Radio identityName={'Boys'} radioValue={'Boys'} labelValue={'Boys'} />
              </div> 
               <div className="horizontal-line vertical-line">
               <Radio identityName={'Girls'} radioValue={'Girls'} labelValue={'Girls'} />
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
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductTwo}/>
              </Col>  
               <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductThree}/>
              </Col>  
               <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductFour}/>
              </Col>  
               <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductFive}/>
              </Col>  
              </Row> 
              <Row>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductSix}/>
              </Col>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductSeven}/>
              </Col>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductEight}/>
              </Col>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductNine}/>
              </Col>
              </Row>
              <Row>
              <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductTwo}/>
              </Col>  
               <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductThree}/>
              </Col>  
               <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductFour}/>
              </Col>  
               <Col lg={3}>
               <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductFive}/>
              </Col>
              </Row>
              <Row>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductSix}/>
              </Col>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductSeven}/>
              </Col>
              <Col lg={3}>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductEight}/>
              </Col>
              <Col lg={3} className='horizontal-line-end'>
              <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductNine}/>
              </Col>
              </Row> 
              </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}

export default HomePage;
