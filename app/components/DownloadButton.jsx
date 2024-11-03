import React from 'react'
import Link from 'next/link';

function DownloadButton() {
  return (
    <Link href="/cv.pdf" >
  Download CV
</Link>
  )
}
export default DownloadButton;

