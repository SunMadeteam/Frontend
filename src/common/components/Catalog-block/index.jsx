import './index.scss';
const CatalogBlock = ({text,img}) => {
  return (
    <div className="catalog_block">
      <img src={img} alt="" />
      <p> {text} </p>
    </div>
  )
}

export default CatalogBlock;