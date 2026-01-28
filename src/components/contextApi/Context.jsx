import { createContext } from "react"
import { ProjectImg } from "../../Images"

export const TestimonialContext = createContext()

const TestimonialProvider = ({ children }) => {
    const CustomerDetail = [
        {
            id: 1,
            name: "Sarah M.",
            img: ProjectImg.Good,
            postedDate: "Posted on August 14, 2023",
            rating: 5,
            p: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
        },
        {
            id: 2,
            name: "Alex K.",
            img: ProjectImg.Good,
            postedDate: "Posted on August 15, 2023",
            rating: 4,
            p: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
        },
        {
            id: 3,
            name: "James L.",
            img: ProjectImg.Good,
            postedDate: "Posted on August 16, 2023",
            rating: 5,
            p: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
        },
        {
            id: 4,
            name: "James L.",
            img: ProjectImg.Good,
            postedDate: "Posted on August 17, 2023",
            rating: 4,
            p: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
        },
        {
            id: 5,
            name: "James L.",
            img: ProjectImg.Good,
            postedDate: "Posted on August 18, 2023",
            rating: 5,
            p: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
        },
        {
            id: 6,
            name: "James L.",
            img: ProjectImg.Good,
            postedDate: "Posted on August 19, 2023",
            rating: 4,
            p: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
        }

    ]

    return (
        <TestimonialContext.Provider value={{ CustomerDetail }}>
            {children}
        </TestimonialContext.Provider>
    )
}

export default TestimonialProvider
