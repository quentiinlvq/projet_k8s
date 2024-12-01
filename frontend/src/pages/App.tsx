import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import MainContent from '../components/MainContent.tsx';
import Footer from '../components/Footer.tsx';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import SignIn from '../pages/SignIn.tsx';
import SignUp from '../pages/SignUp.tsx';
import { AuthProvider } from '../contexts/AuthContext';
/* import ProtectedRoute from "../components/ProtectedRoute.tsx"; */

export default function App(props: { disableCustomTheme?: boolean }) {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />

                    <Route
                        path="/"
                        element={
                            /*<ProtectedRoute */
                                /* element={ */
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
                                /* } */
                            /* /> */
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
