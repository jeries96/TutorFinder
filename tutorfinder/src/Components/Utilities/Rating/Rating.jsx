import Rating from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Rating(props) {

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
            </Box>
        </div>
    )
}
