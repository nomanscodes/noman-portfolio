import React from 'react'

const RichTextComponent = ({ htmlContent }) => {

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}

export default RichTextComponent


