import React , {useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function RatingStar(props) {
    const {value}=props
    const [setRating, rating] = useState(0)
    const [setIsReadOnly, isreadOnly] = useState(false)

    function handleRating(value) {
        setRating(value)
        setIsReadOnly(true)
    }
    return (
        <div dir='ltr'>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    value={value}
                    precision={1}
                    readOnly
                />
            </Box>
        </div>
    )
}
export default RatingStar