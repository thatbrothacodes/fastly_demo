import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    return(
        <>
            <Typography variant="h2">
                How To
            </Typography>
            <br />
            <br />
            <Typography variant="h4">
                Getting Contact Details
            </Typography>
            <Typography variant="body1">
                Select an item from the left side menu
            </Typography>
            <br />
            <br />
            <Typography variant="h4">
                Searching for a Contact
            </Typography>
            <Typography variant="body1">
                Enter 3 letters or more to search for a particular person
            </Typography>
        </>
    )
}
