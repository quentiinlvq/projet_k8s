import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import { SitemarkIcon } from '../shared-theme/CustomIcons';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
        title: 'À la pointe de l\'actualité Cyber',
        description:
            'Grâce à l\'intégration de plus de 100 sources fiables, suivez la veille cybersécurité en une seule interface intuitive.',
    },
    {
        icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
        title: 'Une plateforme robuste',
        description:
            'Conçue pour durer, notre plateforme garantit une performance optimale et une protection continue contre les menaces émergentes.',
    },
    {
        icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
        title: 'Une expérience utilisateur fluide',
        description:
            'Profitez d\'une interface simple et intuitive qui facilite votre navigation et améliore votre efficacité au quotidien.',
    },
    {
        icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
        title: 'Des fonctionnalités innovantes',
        description:
            'Restez en avance avec des outils conçus pour répondre aux défis modernes de la cybersécurité, tout en s\'adaptant à vos besoins.',
    },
];


export default function Content() {
    return (
        <Stack
            sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
        >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <SitemarkIcon />
            </Box>
            {items.map((item, index) => (
                <Stack key={index} direction="row" sx={{ gap: 2 }}>
                    {item.icon}
                    <div>
                        <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                        </Typography>
                    </div>
                </Stack>
            ))}
        </Stack>
    );
}