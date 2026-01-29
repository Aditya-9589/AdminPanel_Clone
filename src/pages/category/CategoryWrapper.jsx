import { useParams } from "react-router-dom";
import CategoryPage from "../../components/category/CategoryPage";


const CategoryWrapper = () => {
    const { id } = useParams();     // undefined or category id

    return <CategoryPage categoryId={id} />;
}

export default CategoryWrapper;