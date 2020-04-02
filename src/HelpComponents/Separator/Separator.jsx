import React from 'react';
import styles from './Separator.module.css';


class Separator extends React.Component {


    render() {
        return (
            <div className={styles.separator}>
                    <div className={styles.theme}>
                        {this.props.componentName}
                    </div>
            </div>
        );
    }
}

export default Separator;
