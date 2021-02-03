import React from 'react'

const Iframe = ({ iFrame }) => {
	return <div>dangerouslySetInnerHTML={{ __html: iFrame ? iFrame : '' }}</div>
}

export default Iframe
