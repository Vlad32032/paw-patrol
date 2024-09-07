import { FC, useRef } from "react"
import styles from "./SliderPagination.module.scss"
import { CSSTransition } from "react-transition-group";

interface ISliderPagination {
    pageNumber: number,
    setPageNumber: (pageNumber: number) => void,
    maxPage: number,
    cardIsOpen: boolean
}

const SliderPagination: FC<ISliderPagination> = ({ pageNumber, setPageNumber, maxPage, cardIsOpen}) => {
    const ref = useRef(null);

    const prevPage = () => {
        pageNumber > 1 && setPageNumber(pageNumber - 1)
    }

    const nextPage = () => {
        pageNumber < maxPage && setPageNumber(pageNumber + 1)
    }

    return (
        <CSSTransition 
            in={cardIsOpen}
            nodeRef={ref}
            timeout={{
                enter: 300,
                exit: 1300,
               }}
            classNames={{...styles}}
        >
            <div className={styles.SliderPagination} ref={ref}>
                <button className={pageNumber === 1 ? styles.disabled + " " + styles.button : styles.button} onClick={prevPage}>{'❮ Prev'}</button>
                <button className={pageNumber === maxPage ? styles.disabled + " " + styles.button : styles.button} onClick={nextPage}>{'Next ❯'}</button>
            </div>
        </CSSTransition>
    )
}

export default SliderPagination