import React from 'react';
import Noticia from './Noticia';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const ListNoticias = ({noticias, load}) => {
    return ( 
        <div className="row">
            {load ? <Spinner /> 
            :
            noticias.map(noticia => (
                <Noticia 
                    key={noticia.title}
                    noticia={noticia}
                    load={load}
                />
            ))}
        </div>
    )
}
 
ListNoticias.propTypes = {
    noticias: PropTypes.array.isRequired,
    load: PropTypes.bool.isRequired
}

export default ListNoticias;