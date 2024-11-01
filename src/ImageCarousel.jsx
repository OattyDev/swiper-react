import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Thumbs } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import './App.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const ImageCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const items = [
    {
      id: 1,
      image: 'img1.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      id: 2,
      image: 'img2.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      id: 3,
      image: 'img3.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER', 
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    },
    {
      id: 4,
      image: 'img4.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    }
  ];

const [previousIndex, setPreviousIndex] = useState(0);

const handleSlideChange = (swiper) => {
  const currentSlide = swiper.slides[swiper.activeIndex];
  const isNext = swiper.activeIndex > previousIndex || 
                (previousIndex === swiper.slides.length - 1 && swiper.activeIndex === 0);
  
  // บันทึก index ปัจจุบันเพื่อใช้เปรียบเทียบในครั้งถัดไป
  setPreviousIndex(swiper.activeIndex);
  
  // รีเซ็ต animation ของ content
  const elements = currentSlide.querySelectorAll('.content > div');
  elements.forEach(element => {
    element.classList.remove('animate');
    void element.offsetWidth;
    element.classList.add('animate');
  });
  
  // รีเซ็ต animation ของรูปภาพ
  const image = currentSlide.querySelector('img');
  if (image) {
    // ลบ class animation ทั้งหมดก่อน
    image.classList.remove('animate-image-in', 'animate-image-out');
    void image.offsetWidth;
    // เพิ่ม class ตามทิศทางการ slide
    if (isNext) {
      // image.classList.add('animate-image-in');
    } else {
      image.classList.add('animate-image-out');
    }
  }
};

  return (
    <>
    <div className='.corasel-container'>

    <Swiper 
    pagination={{
    dynamicBullets: true,
    }}
    modules={[Pagination]}
    className={`carousel`}
    onSlideChange={handleSlideChange}
    onInit={(swiper) => handleSlideChange(swiper)}
    >
        <div className="list">
        {items.map((item, index) => (
                <SwiperSlide className="item" key={index}>
                    <img src={`/image/${item.image}`} alt={`Slide ${item.image}`} />
                    <div className="content">
                        <div className="author"> {item.author} </div>
                        <div className="title"> {item.title} </div>
                        <div className="topic"> {item.topic} </div>
                        <div className="des">
                            {item.description}
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </div>
    </Swiper>

    </div>
    </>

);
};

export default ImageCarousel;