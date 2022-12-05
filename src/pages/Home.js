import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import Navbar from '../components/Navbar/Navbar';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Slider from '../components/Slider/Slider';
import Categories from './../components/Categories/Categories';
import Products from './../components/Products/Products';

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<NewsLetter />
		</div>
	);
};

export default Home;
