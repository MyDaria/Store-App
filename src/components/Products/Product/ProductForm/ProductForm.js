import styles from './ProductForm.module.scss';
import Button from './Button/Button.js';
import OptionSize from './OptionSize/OptionSize.js';
import OptionColor from './OptionColor/OptionColor.js';

const ProductForm = (props) => {
    return (
        <form onSubmit={props.addToCart}>
            <OptionSize />
            <OptionColor />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};



export default ProductForm;