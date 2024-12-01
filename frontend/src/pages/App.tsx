import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from '../components/NavBar.tsx';
import MainContent from '../components/MainContent.tsx';
import Footer from '../components/Footer.tsx';
import AppTheme from '../components/shared-theme/AppTheme.tsx';

export default function App(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <NavBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <MainContent />
            </Container>
            <Footer />
        </AppTheme>
    );
}