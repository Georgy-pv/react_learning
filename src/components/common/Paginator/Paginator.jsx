import React from 'react';
import classes from './Paginator.module.css';

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let page = [];

    for (var i = 1; i < pageCount; i++) {
        page.push(i);
    }

    window.props = props;

    return (
        <div>
            {page.map(p => {
                return <span className={`${classes.page} ${props.currentPage === p && classes.selectedPage}`}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    );
}

export default Paginator;