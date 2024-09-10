import { useEffect, useState } from "react"
import styles from "./CustomCursor.module.scss"

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState([0, 0])
    const [cursorType, setCursorType] = useState('')
    const [cursorText, setCursorText] = useState('')
    const [cursorActive, setCursorActive] = useState(false)

    const onMouseMove = (event: globalThis.MouseEvent) => {
        setCursorPosition([event.clientX, event.clientY])

        const target = (event.target as HTMLElement)

        // if ((event.target as HTMLElement)?.dataset.cursor === 'red') {
        //     setCursorType('red')
        // } else if ((event.target as HTMLElement)?.dataset.cursor === 'yellow' || (event.target as HTMLElement).closest('div')?.dataset.cursor === 'yellow') {
        //     setCursorType('yellow')
        // } else {
        //     setCursorType('')
        // }

        if (target.dataset.cursor) {
            setCursorType(target.dataset.cursor)
        } else {
            const type = target.closest('div')?.dataset.cursor
            setCursorType(type ? type : '')
        }

        if (target.dataset.cursorText) {
            setCursorText(target.dataset.cursorText)
            console.log(target.dataset.cursorText)
        } else {
            const text = target.closest('div')?.dataset.cursorText
            setCursorText(text ? text : '')
        }
    }

    const onClick = (event: globalThis.MouseEvent) => {
        if ((event.target as HTMLElement)?.dataset.cursor || (event.target as HTMLElement).closest('div')?.dataset.cursor) {
            setCursorActive(true)
            setTimeout(() => setCursorActive(false), 200)
        }
    }

    useEffect(() => {
        document.body.addEventListener("mousemove", onMouseMove)
        document.body.addEventListener("click", onClick)
    }, [])

    const getCursorTypeStyle = () => {
        if (cursorType === "yellow") return styles.yellow
        if (cursorType === "red") return styles.red
        if (cursorType === "yellow-big") return styles.yellowBig
        return ""
    } 

    return (
        <div
            className={styles.CustomCursor + " " + (cursorActive ? styles.active : '') + " " + getCursorTypeStyle()}
            style={{top: cursorPosition[1] + 2, left: cursorPosition[0] + 2}}
        >{cursorText}</div>
    )
}

export default CustomCursor