import React from 'react'
import {useAsync} from "react-streaming";

export default function Weather() {
  const wth = useAsync(async () => {
    const response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
    return response.json()
  })
  console.log(wth?.product)
  return (
    <ul>
      {wth?.product}
    </ul>
  )
}