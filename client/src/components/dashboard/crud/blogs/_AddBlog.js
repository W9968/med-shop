import React, { useState } from 'react'

import TextMarkdown from '../../../wysiwyg/TextMarkdown'

const _AddBlog = () => {
  const [value, setValue] = useState(null)

  return (
    <>
      <button onClick={() => console.log(JSON.stringify(value))}>
        convert
      </button>
      <TextMarkdown state={{ value: [value, setValue] }} />
    </>
  )
}

export default _AddBlog
