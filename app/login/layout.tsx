import React, { ReactNode } from "react"

interface layout {
    children: ReactNode
}

function layout({ children }: layout) {
    return (
        <div>
            layout test
            <section>{children}</section>
        </div>
    )
}

export default layout
