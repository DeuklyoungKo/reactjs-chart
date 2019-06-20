import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ListChartLibrary(props){

    const { listOfChartLibrary, handleOnClickLink } = props;

    return (
        <ul>
            { listOfChartLibrary.map(item =>
                <li key={item.id}><a href='#' onClick={(e)=> handleOnClickLink(e, item.id)}>{item.text}</a></li>
            )}
        </ul>
    )
}

ListChartLibrary.propTypes = {
    listOfChartLibrary: PropTypes.array.isRequired,
    handleOnClickLink: PropTypes.func.isRequired
};