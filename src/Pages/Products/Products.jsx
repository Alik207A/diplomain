import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false);
  };

const productsData = [
	{
		id: 1,
		title: 'iPhone 15 Pro',
		description: 'An apple mobile which is nothing like apple',
		price: '550.000',
		data: 2023,
		display: 6.7,
		camera: '48 MP',
		proc: 'Apple A17 Pro',
		acum: '4441 mAh',
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/019/789/300_1695984459-15-pro-max-blue-2-sides-.png',
	},
	{
		id: 2,
		title: 'iPhone 15',
		description:
			'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
		price: '450.000',
		data: 2023,
		display: 6.1,
		camera: '48 MP',
		proc: 'Apple A16 Bionic',
		acum: '3349 mAh',
		rating: 4.44,
		stock: 34,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/019/588/300_1695198722-iphone-15-black-2-sides.-1.png',
	},

	{
		id: 3,
		title: 'Iphone 14 Pro',
		description: 'OPPO F19 is officially announced on April 2021.',
		price: '400.000',
		data: 2022,
		display: 6.1,
		camera: '48 MP',
		proc: 'Apple A16 Bionic',
		acum: '3200 mAh',
		rating: 4.3,
		stock: 123,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/018/252/300_1666270927-web-chapser-5x5-maxeri-hamar.black-3.png',
	},
	{
		id: 4,
		title: 'Iphone 14',
		price: '350.000',
		data: 2022,
		display: 6.1,
		camera: '12 MP',
		proc: 'Apple A15 Bionic',
		acum: '3279 mAh',
		rating: 4.09,
		stock: 32,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/018/083/300_1664795178-web-chapser-50x50.midnight-3.png',
	},
	{
		id: 5,
		title: 'Iphone 13 Pro',
		price: '350.000',
		data: 2021,
		display: 6.1,
		camera: '12 MP',
		proc: 'Apple A15 Bionic',
		acum: '3095 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/014/494/300_1632909479-1.png',
	},
	{
		id: 6,
		title: 'Iphone 13',
		price: '325.000',
		data: 2021,
		display: 6.1,
		camera: '48 MP',
		proc: 'Apple A15 Bionic',
		acum: '3240 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/014/486/300_1632746156-1.png',
	},
	{
		id: 7,
		title: 'Samsung Galaxy S24 Ultra',
		description:
			'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
		price: '736.000',
		data: 2024,
		display: 6.8,
		camera: '200 MP',
		proc: 'Snapdragon 8 Gen 3',
		acum: '5000 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Samsung',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/224/300_1707316151-web-chapser-5x5-maxeri-hamar.titanium-black-3.png',
	},
	{
		id: 8,
		title: 'Xiaomi Poco X6 Pro',
		price: '180.000',
		data: 2024,
		display: 6.67,
		camera: '64 MP',
		proc: 'Dimensity 8300 Ultra',
		acum: '5000 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Xiaomi',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/260/300_1708604965-poco-x6-black-2-sides-.png',
	},
	{
		id: 9,
		title: 'Samsung Galaxy A55',
		price: '190.000',
		data: 2024,
		display: 6.6,
		camera: '50 MP',
		proc: 'Exynos 1480',
		acum: '5000 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Samsung',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/352/300_1711547042-a55--black-2-sides-.png',
	},
	{
		id: 10,
		title: 'Xiaomi 14 Ultra',
		price: '650.000',
		data: 2024,
		display: 6.73,
		camera: '50 MP',
		proc: 'Snapdragon 8 Gen 3',
		acum: '5000 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Xiaomi',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/428/300_1712582579-xiaomi-14-ultra-black-2-sides.png',
	},
	{
		id: 11,
		title: 'Xiaomi Redmi A3',
		price: '50.000',
		data: 2024,
		display: 6.71,
		camera: '8 MP',
		proc: 'Helio G36',
		acum: '5000 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Xiaomi',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/402/300_1712312162-blue-2-sides.png',
	},
	{
		id: 12,
		title: 'Xiaomi Redmi Note 12 Pro',
		description:
			'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
		price: '100.000',
		data: 2022,
		display: 6.67,
		camera: '50 MP',
		proc: 'Dimensity 1080',
		acum: '5000 mAh',
		rating: 4.54,
		stock: 96,
		brand: 'Xiaomi',
		category: 'smartphones',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/019/057/300_1677232848-xiaomi-redmi-note-12-pro-blue-2-sides-.png',
	},
	{
		id: 13,
		title: 'MacBook Air 15.3 M3 MRYT3',
		price: '714.000',
		rating: 4.57,
		data: 2024,
		display: 15.3,
		acum: '67 W',
		proc: 'Apple M3',
		stock: 83,
		camera: "50 MP",
		brand: 'Apple',
		category: 'laptops',
		thumbnail:'https://cdn.storech.com/uploads/products/000/000/000/000/020/371/300_1711699585-10.png',
	},
	{
		id: 14,
		title: 'MSI GF63 Thin 11UC-088XGE',
		price: '360.000',
		discountPercentage: 4.15,
		rating: 4.25,
		display: 15.6,
		proc: 'Core i5 11400H',
		camera: '720 HD',
		acum: '52 W',
		stock: 50,
		brand: 'MSI',
		category: 'laptops',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/440/300_1713174151-0986.png',
	},
	{
		id: 15,
		title: 'Asus VivoBook E1504GA-L1496 OLED',
		price: '250.000',
		discountPercentage: 10.23,
		rating: 4.43,
		display: 15.6,
		acum: '120 W',
		proc: 'Core i3 N305',
		camera: '720 p',
		stock: 68,
		brand: 'ASUS',
		category: 'laptops',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/443/300_1713182223-macbook-1.png',
	},
	{
		id: 16,
		title: 'Lenovo IP Slim 3 16IRU8',
		price: '270.000',
		discountPercentage: 11.83,
		rating: 4.54,
		display: 16,
		acum: '47 W',
		proc: 'Core i5 1335U',
		camera: '1080 p',
		stock: 96,
		brand: 'Lenovo',
		category: 'laptops',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/434/300_1713007837-lenovo-ip-123.png',
	},
	{
		id: 17,
		title: 'Dell Inspiron 7420',
		price: '410.000',
		discountPercentage: 11.83,
		rating: 4.54,
		display: 14,
		camera: '1080p',
		proc: 'Core i7 1255U',
		acum: '65 W',
		stock: 96,
		brand: 'DELL',
		category: 'laptops',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/462/300_1713436072-macbook4.png',
	},
	{
		id: 18,
		title: 'Asus VivoBook F1500EA-WB51',
		price: '250.000',
		discountPercentage: 11.83,
		display: 15.6,
		camera: '1080p',
		proc: 'Core i5 1135G7',
		acum: '50 W',
		rating: 4.54,
		stock: 96,
		brand: 'Asus',
		category: 'laptops',
		thumbnail: 'https://cdn.storech.com/uploads/products/000/000/000/000/020/453/300_1713347515-macbook3.png',
	},
	
  ];

  const filteredProducts = selectedCategory ? productsData.filter(prod => prod.category === selectedCategory) : productsData;

  return (
    <div className="container">
      <div className='container'>
        <nav>
          <i className={`bi bi-list ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>
          <div className='logo'>
            <a href='/'>
              I<span>Smart</span>
            </a>
          </div>
          <div className={`menu_list ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <button onClick={() => handleCategoryClick('smartphones')}>Հեռախոսներ</button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('laptops')}>Նոթբուքներ</button>
              </li>
			  <li>
				<Link to='/about'>
					<button>Մեր Մասին</button>
				</Link>
			  </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='prods'>
        {filteredProducts.map(prod => {
          return (
            <div className='prod-cart' key={prod.id}>
              <p>{prod.title}</p>
              <img src={prod.thumbnail} alt='' />
              <p>{prod.price} Դրամ</p>
			  <Link to={`/product/${prod.id}`} className="button2">Info</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Products;
