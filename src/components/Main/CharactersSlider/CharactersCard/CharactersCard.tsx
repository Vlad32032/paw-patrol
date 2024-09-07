import { FC, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"

import { IdataCard } from "../../../../assets/data/dataPawPatrol"


import styles from "./CharactersCard.module.scss"
import './transitions/transition1.scss'
import './transitions/transition2.scss'
import './transitions/transition3.scss'

interface ICharactersCard {
    transition: boolean,
    transitionType: string,
    setCardIsOpen: (isOpen: boolean) => void,
    cardIsOpen: boolean,
    setPage: () => void,
    dataCard: IdataCard
}

const CharactersCard: FC<ICharactersCard> = ({ transition, transitionType, setCardIsOpen, cardIsOpen, setPage, dataCard }) => {
    const [inToggle, setInToggle] = useState(false)
    const ref = useRef(null)

    const onCardClick = () => {
        if (!cardIsOpen) {
            setInToggle(true)
            setCardIsOpen(true)
        }

        if (cardIsOpen && inToggle) {
            setInToggle(false)
            setCardIsOpen(false)
        }
    }

    console.log((cardIsOpen && !inToggle))
    // + ' ' + ((cardIsOpen && !inToggle) ? styles.hide : '')
    return (
        <>
        { transition ? (
            <CSSTransition
                in={inToggle}
                nodeRef={ref}
                timeout={800}
                classNames={transitionType}
            >
                <div className={styles.card + ' ' + ((cardIsOpen && !inToggle) ? styles.hide : '')} ref={ref} onClick={onCardClick}>
                    <div className={styles.bg + ' ' + styles.hover} style={{background: dataCard.background}} >
                        <h3 style={{color: dataCard.colors[0]}} >{dataCard.name}</h3>
                        <h4 style={{color: dataCard.colors[1]}} >{dataCard.title}</h4>
                        <span className={styles.more} style={{color: dataCard.colors[1]}} >Побробнее ᐳ</span>

                        <p style={{color: dataCard.colors[2]}} >{dataCard.description}</p>

                        <img src={dataCard.images[1]} alt="#" />
                        <button className={styles.button} >✖ Close</button>
                    </div>

                    <img className={styles.img + ' ' + styles.big} alt="#" src={dataCard.images[0]} />
                </div>
            </CSSTransition>
        ) : (
            <div className={styles.card + ' ' + ((cardIsOpen && !inToggle) ? styles.hide : '')} onClick={setPage}>
                <div className={styles.bg} style={{background: dataCard.background}} >
                    <h3 style={{color: dataCard.colors[0]}} >{dataCard.name}</h3>
                    <h4 style={{color: dataCard.colors[1]}} >{dataCard.title}</h4>
                </div>

                <img className={styles.img + ' ' + styles.small} alt="#" src={dataCard.images[0]} />
            </div>
        )}
        </>
    )
}

export default CharactersCard