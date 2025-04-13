import React, { Component } from 'react'
import spinner from "./spinner.gif"

const Loading = () => {
  return (
    <div className="text-center">
      <img src={spinner} alt="spinner.gif" />
    </div>
  )
}

export default Loading
