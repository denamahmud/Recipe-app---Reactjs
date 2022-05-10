import { Button } from '@mui/material'

const Pagination = ({ totalPages, handlePage }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1)
  return (
    <div>
        {
            pages.map(num => (
                <Button
                key={num}
                onClick={() => handlePage(num)}
                >
                {num}
                </Button>
            ))
        }
    </div>
  )
}

export default Pagination