// Add necessary technologies for the Footer component.
import React from 'react'; 
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Add the makeStyles and useStyles hook to add styling to our custom footer component.
const useStyles = makeStyles({
    footerSection: {
        backgroundColor: '#0D0D0D',
        padding: '10px'
    }
});

// Add the Footer component.
function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footerSection}>
            <Container>

            </Container>
        </footer>
    )
};
export default Footer;