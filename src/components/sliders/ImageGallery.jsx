import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {galleryImages} from "../../assets/img/gallery/index";

function MyImageGallery() {


  return <ImageGallery items={galleryImages} />;
}

export default MyImageGallery;
