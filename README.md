# Primary index.js page
This is the primary index.js page for the website. It is responsible for rendering the home page and displaying a list of products based on filters selected by the user.

## Dependencies
This page imports the following dependencies:

- Head from next/head: for setting metadata in the header of the page
- Image from next/image: for rendering the logo image
- styles from @/styles/Home.module.css: for styling the page
- inventory from @/data/inventory: for storing product data
- useState from react: for managing state variables
- useEffect from react: for performing side effects such as fetching data
- Product from @/components/Product: for rendering individual products
- Filter from @/components/Filter: for rendering filter options

## Functions
updateProducts(category, sex)
This function takes in two arguments: category and sex. It then filters the list of products based on the values of these arguments and sets the filtered products to - the state variable products. The function is called whenever the filter options are changed.

## Components
<Head>
This component sets the metadata for the page including the title, description, viewport, and favicon.

<Image>
This component renders the logo image for the store.

<Filter>
This component renders the filter options for the store. It takes in the setProducts and updateProducts functions as props.

<Product>
This component renders an individual product item with its image, title, hex code, and price.

styles
This module contains the CSS styles for the page including the layout, fonts, colors, and responsive design.

Filter Component
This is the index.js page for the Filter Component. It is responsible for rendering the filter options for the store.

Dependencies
This page imports the following dependencies:

styles from @/components/Filter/Filter.module.css: for styling the component
inventory from @/data/inventory: for storing product data
Functions
handleFilter(event)
This function takes in an event object as an argument. It then extracts the values of the selected filter options and filters the list of products based on these values. Finally, it sets the filtered products to the state variable products. The function is called whenever a filter option is changed.

# Filter Component
The Filter component allows users to filter a list of items based on a search query. It is a controlled component, meaning that its state is controlled by its parent component via props.

## Props
The following props are available for the Filter component:

value (string, required): The current search query value.
onChange (function, required): A callback function to be executed whenever the search query value changes.
placeholder (string, optional): The placeholder text to display when the search input is empty.
className (string, optional): Additional CSS classes to apply to the component for styling purposes.

## How it Works
The Filter component is a controlled component that renders an <input> element with the type search. It listens to the onChange event of this input, which triggers the execution of the onChange function passed to it via props. This function updates the search query value in the parent component's state, triggering a re-render of the parent component and allowing it to filter its list of items based on the updated search query value.

## Product
The Product component is a reusable component that displays product information, such as a product image, name, and price.

## Props
The Product component accepts the following props:

- product: (required) An object containing the product information. It should have the following properties:
- id: (required) A unique identifier for the product.
- name: (required) The name of the product.
- description: (optional) A description of the product.
- price: (required) The price of the product, in cents.
- imageUrl: (required) The URL of an image of the product.
- onClick: (optional) A function to be called when the product is clicked.

## How it works
The Product component is implemented as a functional component using React hooks. It uses the product prop to display the product information, and the onClick prop to add click functionality to the component.

The component is styled using CSS modules, with styles defined in a separate Product.module.css file. The component's image is loaded using the img HTML element, with the src attribute set to the imageUrl prop.

When the component is clicked, the onClick function (if provided) is called with the product information as an argument.