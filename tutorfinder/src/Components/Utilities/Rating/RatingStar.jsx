import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function RatingStar(props) {
        const {value} =props
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} precision={0.5} readOnly />
            </Box>
        </div>
    )
}
export default RatingStar