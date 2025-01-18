import NewCollectionHeader from "./new-collection-header/new-collection-header";
import Cards from "./collection-cards/collection-cards";
import "./newcollection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://i.pinimg.com/564x/b1/66/26/b166265ae7ec8138795e8ce66ea41090.jpg",
      title: "Casual",
      subTitle: "man",
      price: 100,
    },
    {
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/7/KF/IU/YE/133215410/product-jpeg.jpg",
      title: "Causual",
      subTitle: "women",
      price: 200,
    },
    {
      image:
        "https://images.meesho.com/images/products/310774650/hkdgr_512.webp",
      title: "Causual",
      subTitle: "kids",
      price: 350,
    },
    {
      image:
        "https://www.nihalfashions.com/blog/wp-content/uploads/2018/06/Kids-Kurta-Pajama-Nihal-Fashions-1.jpg",
      title: "Traditional",
      subTitle: "kids",
      price: 2500,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0681/3296/2546/files/Floor-Length-Anarkali-Suits-min_2022-07.jpg",
      title: "Traditional",
      subTitle: "women",
      price: 3000,
    },
    {
    image:
        "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-art-silk-sherwani-in-cream-v1-mly2466.jpg",
      title: "Traditional",
      subTitle: "man",
      price: 1600,
    },
  ];
  return (
    <div className="newcollection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;