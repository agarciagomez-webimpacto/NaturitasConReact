import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn.naturitas.es/media/wysiwyg/Banners/Home/promos/Header_home_rebajas.jpg',
  
  },
  {
    src: 'https://cdn.naturitas.es/media/wysiwyg/Banners/Header_home_solaray.jpg',
  
  },
  {
    src: 'https://cdn.naturitas.es/media/wysiwyg/Banners/Home/promos/Header_home_biocop-1.jpg',
  
  }
];

const CarouselHome = () => <UncontrolledCarousel  items={items} className="col-12 m-0 p-0 " />;

export default CarouselHome;
