import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "adidas", label: "Adidas" },
    { value: "fila", label: "Fila" },
    { value: "newbalance", label: "New Balance" },
    { value: "nike", label: "Nike" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#000000",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#000000" : "white",
        color: state.isSelected ? "white" : "#000000",
        "&:hover": {
        backgroundColor: "#E5E5E5",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category ===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filtro" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
