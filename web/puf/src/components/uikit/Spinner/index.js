import * as React from 'react'
import CircleLoader from "react-spinners/CircleLoader";

export const Spinner = () => (
  <CircleLoader
    color="black"
    loading="true"
    size={20}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
)
