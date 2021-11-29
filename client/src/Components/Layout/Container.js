import React from 'react';


const Container = (props) => {
    const classInit = (props) => {
        let classList;
        let allowedClasses = ['type', 'name', 'gutter', 'spacing', 'variation', 'content'];
        const filteredClasses  = Object.keys(props)
                                    .filter( key => allowedClasses
                                    .includes(key))
                                    .reduce((obj, key) => {
                                        obj[key] = props[key];
                                        return Object.values(obj)
                                    }, {});
        classList = filteredClasses.toString()
                                    .replaceAll(',', ' ')
                                    .toLowerCase();
        return classList;
    }
    return (
        <div className={`Container ${classInit(props)}`}>
            {props.children}
        </div>
    );
};

export default Container;