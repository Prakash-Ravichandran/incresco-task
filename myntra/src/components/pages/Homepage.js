import React from 'react';
import ProductTwo from '../../images/productTwo.webp';
import Product from '../templates/ProductComponent';
import '../UI/atoms/BRAND/brand.css';
import '../pages/HomePage.css';
import DropDown from '../UI/atoms/DROPDOWNS/dropDown';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/UI/atoms/LABEL/label.css';


const HomePage = () => {
    return(
        <>
        <div>
          <Container className="no-margin" fluid>
            <Row>
              <Col lg={3} className='filter-row horizontal-line'>
              <p className=' brand-font'>FILTERS</p>
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
        
        
       
        <Product brandName="WROGN" brandType="Slim-fit-colour-blocked-cotton" discountedPrice="100" productStrike="250" discountPercentage="25" productImage={ProductTwo}/>
        </Container>
        </div>
        </>
    );
}

export default HomePage;
