import Part from "./Part"
import Sum from "./Sum"

const Content = ({content}) => {
    return (
        <>
            <Part content={content} />
            <Sum content={content} />
        </>
    )
}

export default Content