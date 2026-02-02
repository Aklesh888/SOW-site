import headerStyles from "../styles/PricelistHeader.module.css";
import menuStyles from "../styles/PricelistMenu.module.css";
import contentStyles from "../styles/PricelistContent.module.css";
import MenuLogo from "../assets/login/SwedenFlag.png";
import {
  BiImport,
  BiLogOut,
  BiMenu,
  BiPlusCircle,
  BiPrinter,
  BiSearch,
  BiSolidDownArrow,
  BiSolidOffer,
} from "react-icons/bi";
import { Product } from "../components/product";

import {  useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/getProducts";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PiInvoice } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiPriceTag } from "react-icons/gi";
import { MdInventory } from "react-icons/md";
import { FcAdvance } from "react-icons/fc";

export const PricingList = () => {
  const navigate = useNavigate();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  if (!sessionStorage.getItem("token")) {
    toast("Token Invalid");
    navigate("/");
  }

  return (
    <div className={headerStyles.root}>
      <header className={headerStyles.header}>
        <div className={headerStyles.profileContainer}>
          <CgProfile className={headerStyles.profileImage} alt="Profile" />
          <div className={headerStyles.nameContainer}>
            <div className={headerStyles.name}>John Andre</div>
            <div className={headerStyles.address}>Storfjord AS</div>
          </div>
        </div>
        <div
          className={headerStyles.hamburgerMenu}
          onClick={() => {
            setShowHamburgerMenu(!showHamburgerMenu);
          }}
        >
          <BiMenu size={40}/>
        </div>

        <div className={headerStyles.flagContainer}>
          <h1 className={headerStyles.flagName}>Norway</h1>
          <img src={MenuLogo} className={headerStyles.flag} alt="COuntry" />
        </div>
      </header>

      <div className={menuStyles.mainContainer}>
        <Menu />
        <Contents />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className={menuStyles.menuContainer}>
      <div className={menuStyles.menuName}>Menu</div>
      <hr />
      <div className={menuStyles.namesContainer}>
        <div className={menuStyles.itemContainer}>
          <PiInvoice className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <CgProfile src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Customers</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <CiSettings src={MenuLogo} className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>My Business</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <GiPriceTag src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Price List</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <PiInvoice className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Multiple invoicing</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <PiInvoice className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Unpaid Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <BiSolidOffer className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Offer</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <MdInventory className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Inventory Control</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <PiInvoice className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Member Invoicing</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <BiImport className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Import/Export</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <BiLogOut className={menuStyles.itemImage} />
          <div className={menuStyles.itemName}>Log Out</div>
        </div>
      </div>
    </div>
  );
};

const Contents = () => {
  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: () => getProducts() });

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast(error.message);
      navigate("/");
    }
  }, [isError]);

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className={contentStyles.contentRoot}>
      <div className={contentStyles.searchPriceSection}>
        <div className={contentStyles.searchSection}>
          <div className={contentStyles.searchBarContainer}>
            <input
              name="search article"
              className={contentStyles.searchInput}
              placeholder="Search article No."
            ></input>
            <div className={contentStyles.searchIconContainer}>
              <BiSearch size={16} color="rgb(155, 196, 255)" />
            </div>
          </div>
          <div className={contentStyles.searchBarContainer}>
            <input
              name="Searh Product"
              className={contentStyles.searchInput}
              placeholder="Search article No."
            ></input>
            <div className={contentStyles.searchIconContainer}>
              <BiSearch size={16} color="rgb(155, 196, 255)" />
            </div>
          </div>
        </div>
        <div className={contentStyles.newProductSection}>
          <button className={contentStyles.buttonContainer}>
            <div className={contentStyles.newProductButtonLabel}>
              New Product
            </div>
            <BiPlusCircle className={contentStyles.buttonIcon} />
          </button>
          <button className={contentStyles.buttonContainer}>
            <div className={contentStyles.newProductButtonLabel}>
              Price List
            </div>
            <BiPrinter  className={contentStyles.buttonIcon} />
          </button>
          <button className={contentStyles.buttonContainer}>
            <div className={contentStyles.newProductButtonLabel}>
              Advanced Mode
            </div>
            <FcAdvance  className={contentStyles.buttonIcon} />
          </button>
        </div>
      </div>
      <div className={contentStyles.articleSection}>
        <div className={contentStyles.titlesContainer}>
          <div className={contentStyles.titleArticleNo}>
            <p className={contentStyles.titleLabel}>Article.No</p>
            <BiSolidDownArrow size={20} />
          </div>
          <div className={contentStyles.titleProductName}>
            <div className={contentStyles.titleLabel}>Product/Service</div>
            <BiSolidDownArrow size={20} />
          </div>
          <div className={contentStyles.titleInPrice}>
            <div className={contentStyles.titleLabel}>In Price</div>
          </div>
          <div className={contentStyles.titlePrice}>
            <div className={contentStyles.titleLabel}>Price</div>
          </div>
          <div className={contentStyles.titleUnit}>
            <div className={contentStyles.titleLabel}>Unit</div>
          </div>
          <div className={contentStyles.titleInStock}>
            <div className={contentStyles.titleLabel}>In Stock</div>
          </div>
          <div className={contentStyles.titleDescription}>
            <div className={contentStyles.titleLabel}>Description</div>
          </div>
        </div>
        <div className={contentStyles.productsContainer}>
          {productsData &&
            productsData.data.map((product, id) => (
              <Product
                key={id}
                id={product.id}
                articleNo={product.articleNo}
                name={product.name}
                description={product.description}
                inPrice={product.inPrice}
                inStock={product.inStock}
                price={product.price}
                unit={product.unit}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
