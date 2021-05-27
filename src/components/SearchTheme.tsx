import React from 'react';


interface SearchProps {
    children: React.HTMLAttributes<any>
}

const SearchTheme = ({children}:SearchProps) => {
    return (
        <div>
            {children}
        </div>
    );
};




export default SearchTheme;
