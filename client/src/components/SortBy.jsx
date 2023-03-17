import React from 'react';


const SortBy = () => {

    const handleSortBy = (e) => {
        console.log('User Clicked', e.target.value);
      }

    return (
        <select class="reviews-dropdown" onChange={handleSortBy}>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevance</option>
        </select>
    )

}

export default SortBy;



