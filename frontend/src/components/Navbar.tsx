import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between navbar">
      <h2>ZotTier</h2>
      <button>Sign in</button>
    </nav>
  );
};

export default Navbar;
