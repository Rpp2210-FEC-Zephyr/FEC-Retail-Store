import React from 'react';


const SortBy = (props) => {

    const handleSortBy = (e) => {
        props.sortFunc(e.target.value);
        console.log('sorted by ', e.target.value);
      }

    return (
        <select class="reviews-dropdown" onChange={handleSortBy}>
            <option value="relevant">Relevance</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
        </select>
    )

}

export default SortBy;



