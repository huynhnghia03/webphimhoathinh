import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from './configButton.module.css'
import React from "react";

const PreviousBtn = (props: any) => {
    const { onClick } = props;
    return (
        <div className={`${styles.showArrow} ${styles.prev}`} onClick={onClick}>
            <ChevronLeft width={30} height={30} />
        </div>
    );
};
const NextBtn = (props: any) => {
    const { onClick } = props;
    return (
        <div className={`${styles.showArrow} ${styles.next}`} onClick={onClick}>
            <ChevronRight width={30} height={30} />
        </div>
    );
};

export { PreviousBtn, NextBtn }