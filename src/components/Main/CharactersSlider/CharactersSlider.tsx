import { useState } from "react"
import { dataCardList } from "../../../assets/data/dataPawPatrol";

import CharactersCard from "./CharactersCard/CharactersCard";
import SliderPagination from "./SliderPagination/SliderPagination";

import styles from "./CharactersSlider.module.scss"

const CharactersSlider = () => {
    const cardList = dataCardList

    const maxPage = 3

    const [cardIsOpen, setCardIsOpen] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const currentCard = [
        (pageNumber * 3) -3,
        (pageNumber * 3) -2,
        (pageNumber * 3) -1
    ]

    const getCardTransition = (i: number) => {
        return currentCard.includes(i) ? true : false
    }

    const getCardTransitionType = (i: number) => {
        if (currentCard[0] === i) return 'transition1'
        if (currentCard[1] === i) return 'transition2'
        if (currentCard[2] === i) return 'transition3'
        return ''
    }

    const getSetPage = (i: number) => {
        if ( currentCard[2] + 1 === i) return () => setPageNumber(pageNumber + 1)
        if ( currentCard[0] - 1 === i) return () => setPageNumber(pageNumber - 1)
        return () => {}
    }

    return (
        <>
            <div className={styles.charactersSlider}>
                <div className={styles.charactersWrapper + " " + (pageNumber > 1 ? styles[`page${pageNumber}`] : '')}>
                    { cardList.map((card, i) => 
                        <CharactersCard
                            key={i}
                            transition={getCardTransition(i)}
                            transitionType={getCardTransitionType(i)}
                            setCardIsOpen={setCardIsOpen}
                            cardIsOpen={cardIsOpen}
                            setPage={getSetPage(i)}
                            dataCard={card}
                        />
                    )} 
                </div>

            </div>

            <SliderPagination 
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                maxPage={maxPage}
                cardIsOpen={cardIsOpen}
            />
        </>
    )
}

export default CharactersSlider