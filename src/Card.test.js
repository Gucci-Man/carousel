import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import React from 'react';

const test_caption = TEST_IMAGES[0].caption;
const test_src = TEST_IMAGES[0].src;
const test_total = TEST_IMAGES.length

// smoke test
it('renders without crashing', () => {
    render(<Card 
        caption={test_caption} 
        src={test_src}
        currNum={1}
        totalNum={test_total}
        />);
});

// snapshot test
it('matches snapshot', () => {
    const {asFragment} = render(<Card 
        caption={test_caption} 
        src={test_src}
        currNum={1}
        totalNum={test_total}
        />);
    expect(asFragment()).toMatchSnapshot();
});