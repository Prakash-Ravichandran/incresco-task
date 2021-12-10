import React from 'react';
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
import FilterComponent from '../templates/FilterComponent';


const HomePage = () => {
    return(
        <>
        <div>
          <Container className="no-margin" fluid>
            <Row>
              <Col lg={3} className='filter-row horizontal-line'>
              <p className=' brand-font '>FILTERS</p>
              </Col>
              <Col lg={6} className='flex filter-row horizontal-line vertical-line' >
                <div>
                <span className='label-font padding'>Bundle</span>
                <span className='label-font padding'>Bundle</span>
                <span className='label-font padding'>Bundle</span>
                </div>
              </Col>
              <Col lg={3} className='filter-row horizontal-line vertical-line'>
                sort by
              </Col>
            </Row>
            <Row>
              <Col lg={3} >
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
              </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}

export default HomePage;
