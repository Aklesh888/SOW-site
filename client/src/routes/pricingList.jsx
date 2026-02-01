import headerStyles from "../styles/PricelistHeader.module.css";
import menuStyles from "../styles/PricelistMenu.module.css";
import contentStyles from "../styles/PricelistContent.module.css";
import MenuLogo from "../assets/login/SwedenFlag.png";
import { BiPlusCircle, BiPrinter, BiSearch, BiSolidDownArrow } from "react-icons/bi";
import { GrSwitch } from "react-icons/gr";
import { Product } from "../components/product";

import { useMutation, useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/getProducts";


export const PricingList = () => {
  return (
    <div className={headerStyles.root}>
      <header className={headerStyles.header}>
        <div className={headerStyles.profileContainer}>
          <img src={MenuLogo} className={headerStyles.profileImage} alt="" />
          <div className={headerStyles.nameContainer}>
            <div className={headerStyles.name}>John Andre</div>
            <div className={headerStyles.address}>Storfjord AS</div>
          </div>
        </div>

        <div className={headerStyles.flagContainer}>
          <h1 className={headerStyles.flagName}>Norway</h1>
          <img src={MenuLogo} className={headerStyles.flag} alt="" />
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
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
        <div className={menuStyles.itemContainer}>
          <img src={MenuLogo} className={menuStyles.itemImage} alt="" />
          <div className={menuStyles.itemName}>Invoices</div>
        </div>
      </div>
    </div>
  );
};

const Contents = () => {


  const {data: productsData, isLoading} = useQuery({queryKey: ['products'], queryFn: () => getProducts()})


  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }


  return (
    <div className={contentStyles.contentRoot}>
      <div className={contentStyles.searchPriceSection}>
        <div className={contentStyles.searchSection}>
          <div className={contentStyles.searchBarContainer}>
            <input
              className={contentStyles.searchInput}
              placeholder="Search article No."
            ></input>
            <div className={contentStyles.searchIconContainer}>
              <BiSearch size={16} color="rgb(155, 196, 255)"/>
            </div>
          </div>
          <div className={contentStyles.searchBarContainer}>
            <input
              className={contentStyles.searchInput}
              placeholder="Search article No."
            ></input>
             <div className={contentStyles.searchIconContainer}>
              <BiSearch size={16} color="rgb(155, 196, 255)"/>
            </div>
          </div>
        </div>
        <div className={contentStyles.newProductSection}>
          <button className={contentStyles.buttonContainer}>
            <div className={contentStyles.newProductButtonLabel}>
              New Product
            </div>
            <BiPlusCircle />
          </button>
          <button className={contentStyles.buttonContainer}>
            <div className={contentStyles.newProductButtonLabel}>
              New Product
            </div>
            <BiPrinter/>
          </button>
          <button className={contentStyles.buttonContainer}>
            <div className={contentStyles.newProductButtonLabel}>
              New Product
            </div>
            <GrSwitch />
          </button>
        </div>
      </div>
      <div className={contentStyles.articleSection}>
        <div className={contentStyles.titlesContainer}>
          <div className={contentStyles.titleArticleNo}>
            <div className={contentStyles.titleLabel}>Article No</div>
            <BiSolidDownArrow size={20} />
          </div>
          <div className={contentStyles.titleProductName}>
            <div className={contentStyles.titleLabel}>Article No</div>
            <BiSolidDownArrow size={20} />
          </div>
          <div className={contentStyles.titleInPrice}>
            <div className={contentStyles.titleLabel}>Article No</div>
          </div>
          <div className={contentStyles.titlePrice}>
            <div className={contentStyles.titleLabel}>Article No</div>
          </div>
          <div className={contentStyles.titleUnit}>
            <div className={contentStyles.titleLabel}>Article No</div>
          </div>
          <div className={contentStyles.titleInStock}>
            <div className={contentStyles.titleLabel}>Article No</div>
          </div>
          <div className={contentStyles.titleDescription}>
            <div className={contentStyles.titleLabel}>Article No</div>
          </div>
        </div>
        <div className={contentStyles.productsContainer}>
          { productsData&&
            productsData.data.map((product, id) =>  <Product key={id} articleNo={product.articleNo} name={product.name} description={product.description} inPrice={product.inPrice} inStock={product.inStock} price={product.price} unit={product.unit} />)
          }
        </div>
      </div>
    </div>
  );
};
