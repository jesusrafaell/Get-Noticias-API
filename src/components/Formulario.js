import React from 'react'; 
import styles from './Formulario.module.css';
import useCategory from '../hooks/useCategory';
import useCountry from '../hooks/useCountry';
import PropTypes from 'prop-types';

const Formulario = ({saveCategory, saveCountry}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Tecnología'}
    ]

    const COUNTRYS = [
        {value: 'ar', label: 'Argentina'},
        {value: 've', label: 'Venezuela'},
        {value: 'us', label: 'Estados Unidos'},
        {value: 'fr', label: 'Francia'},
        {value: 'jp', label: 'Japon'},
        {value: 'rs', label: 'Rusia'},
        {value: 'co', label: 'Colombia'},
        {value: 'mx', label: 'Mexico'}
    ]

    //custom hooks
    const [category, SelectNoticias] = useCategory(OPCIONES[0].value, OPCIONES);
    const [country, SelectCountry] = useCountry(COUNTRYS[1].value, COUNTRYS);
    
    //submit al form categoria to app
    const handleSubmit = e => {
        e.preventDefault();

        saveCountry(country);
        saveCategory(category);
    }

    return (  
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Search Notice</h2>
                      <SelectNoticias />
                      <div className={styles.country}>
                        <SelectCountry />
                      </div>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    saveCategory: PropTypes.func.isRequired,
    saveCountry: PropTypes.func.isRequired
}

export default Formulario;