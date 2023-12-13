// RestaurantService.js
const restaurantNames = [
  { id: 1, name: 'Subway', description: 'Subway is a fast-food chain known for its customizable sandwiches and salads.', address: '2303 Andersonville Hwy, Clinton, Tennessee, 37716, United States' },
  { id: 2, name: 'McDonalds', description: 'Popular fast-food chain that has served over 99 billion people.', address: '1 McDonalds Pl, Toronto, ON M3C 3L4' },
  { id: 3, name: 'KFC', description: 'Known for its fried chicken.', address: '1441 Gardiner Lane, Louisville, Kentucky' },
  { id: 4, name: 'Burger King', description: 'Home of the Whopper.', address: '123 Main St, Toronto, ON' },
  { id: 5, name: 'Pizza Hut', description: 'Famous for its pizza and pasta dishes.', address: '456 Queen St, Toronto, ON' },
  { id: 6, name: 'Tim Hortons', description: 'Canadian coffee and fast-food restaurant.', address: '789 Yonge St, Toronto, ON' },
  { id: 7, name: 'Wendy\'s', description: 'Known for its square-shaped burgers.', address: '101 Front St, Toronto, ON' },
  { id: 8, name: 'Popeyes', description: 'Famous for its spicy fried chicken.', address: '202 King St, Toronto, ON' },
  { id: 9, name: 'A&W', description: 'Root beer and burgers.', address: '303 Bay St, Toronto, ON' },
  { id: 10, name: 'Dairy Queen', description: 'Soft-serve ice cream and fast food.', address: '404 Dundas St, Toronto, ON' },
  { id: 11, name: 'Five Guys', description: 'Casual dining with customizable burgers and fries.', address: '505 Bloor St, Toronto, ON' },
  { id: 12, name: 'Harvey\'s', description: 'Canadian-based fast-food restaurant chain.', address: '606 College St, Toronto, ON' },
];

export const getAllRestaurants = () => {
  return restaurantNames;
};

export const searchRestaurants = (query) => {
  const lowerCaseQuery = query.toLowerCase();
  return restaurantNames.filter((restaurant) => restaurant.name.toLowerCase().includes(lowerCaseQuery));
};

