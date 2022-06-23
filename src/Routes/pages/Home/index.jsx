import { useSelector } from "react-redux";

//components
import ImageDisplay from "../../../components/image-display";
import Content from "../../../components/content";


const Home = () => {
    const products = useSelector((state) => state.products.value);


    return (

        <div className="hero">
            {
                products.map(product => {
                    return (
                        <div key={product.id} className="hero-mini">
                            <ImageDisplay Images={product.images} />
                            <Content product={product} />
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Home;