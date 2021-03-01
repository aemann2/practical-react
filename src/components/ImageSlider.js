import React, { useState, useEffect } from 'react';

function ImageSlider() {
  // setting state for images and index using hooks
  const images = [
    'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
    'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE',
    'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
  ];

  const [index, setIndex] = useState(0);

  // event handler for Onclick...notice that things are actually updated asychronously. the value doesn't get updated right away
  const handleNext = () => {
    console.log(index);
    index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
    console.log(index);
  };
  console.log(index);

  // lifecycle functions to log when the slider gets unmounted

  useEffect(() => {
    console.log('mounted');
    return function cleanup() {
      console.log('unmounted');
    };
  });

  // the above useEffect hook replaces these class-based lifecycle components:

  // function componentWillUnmount() {
  //   console.log('unmounting...');
  // }

  // function componentDidMount() {
  //   console.log('mounting...');
  // }

  return (
    <div>
      <img
        // style object that sets image height / width
        style={{
          width: 100,
          height: 100,
        }}
        src={images[index]}
        alt=''
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ImageSlider;
