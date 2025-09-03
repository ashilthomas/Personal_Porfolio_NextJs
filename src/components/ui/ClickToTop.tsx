import { ArrowBigUp } from 'lucide-react'
import React from 'react'

function ClickToTop() {
  return (
    <div>
        <a href='#hero' className="bg-blue-600 text-white p-3 fixed right-10 bottom-10 z-100 rounded-full shadow hover:bg-blue-700 transition">
            <ArrowBigUp />
        </a>
    </div>
  )
}

export default ClickToTop