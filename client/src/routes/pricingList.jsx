import headerStyles from '../styles/PricelistHeader.module.css'
import menuStyles from '../styles/PricelistMenu.module.css'
import productStyles from '../styles/PricelistMenu.module.css'
import MenuLogo from '../assets/login/SwedenFlag.png'

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
          <img src="" className={headerStyles.flag} alt="" />
        </div>
      </header>

      <div className={menuStyles.mainContainer}>
        <Menu/>
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
  )
}


const Contents = () => {
  return (
    <div className={styles.contentRoot}>
      <div className={styles.searchPriceSection}>
        <div className={styles.searchSection}></div>
        <div className={styles.newProductSection}></div>
      </div>
      <div className={styles.articleSection}>
        <div className={styles.titleContainer}></div>
        <div className={styles.productsContainer}>
          <Product />
        </div>
      </div>
    </div>
  )
}

const Product = () => {
  return (
    <div className={productStyles.productContainer}>
      <input type="text" className={productStyles.inputArticleNo} />
      <input type="text" className={productStyles.inputProductName} />
      <input type="text" className={productStyles.inputInPrice} />
      <input type="text" className={productStyles.inputPrice} />
      <input type="text" className={productStyles.inputUnit} />
      <input type="text" className={productStyles.inputInStock} />
      <input type="text" className={productStyles.inputDescription} />
    </div>
  )
}