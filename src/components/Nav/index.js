import React from 'react';

const categories = [
  {
    names: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  },
  { names: "portraits", description: "Portraits of people in my life" },
  { names: "food", description: "Delicious delicacies" },
  {
    names: "landscape",
    description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  },
];

function categorySelected() {
  // eslint-disable-next-line no-restricted-globals
  console.log( `${name} clicked`)
}

function Nav() {
  return (
    <header  className="my-5">
        <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.names}
        >
        <span onClick={() => categorySelected(category.names)} >
          {category.names}
        </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;