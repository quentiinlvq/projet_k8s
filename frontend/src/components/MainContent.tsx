import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
                <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                        <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
                    ))}
                </AvatarGroup>
                <Typography variant="caption">
                    {authors.map((author) => author.name).join(', ')}
                </Typography>
            </Box>
        </Box>
    );
}

export function Search() {
    return (
        <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}

export default function MainContent() {
    const [articles, setArticles] = useState<any[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
    //const API_URL = import.meta.env.REACT_APP_API_URL;
    const API_URL = 'http://localhost:3000';

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/articles`);
                setArticles(response.data);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };

        const fetchTags = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/tags`);
                setTags(response.data.map((tag: { name: string }) => tag.name));
            } catch (error) {
                console.error('Failed to fetch tags:', error);
            }
        };

        fetchArticles();
        fetchTags();
    }, []);

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = (tag: string) => {
        console.info(`Filter clicked for tag: ${tag}`);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h1" gutterBottom>
                    ThreatScope
                </Typography>
                <Typography>L'actualité cybersécurité en temps réel...</Typography>
            </div>
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            >
                <Search />
                <IconButton size="small" aria-label="RSS feed">
                    <RssFeedRoundedIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >
                <Box sx={{ display: 'inline-flex', flexDirection: 'row', gap: 1, overflow: 'auto' }}>
                    <Chip onClick={() => handleClick('All categories')} size="medium" label="All categories" />
                    {tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <Chip
                                key={index}
                                onClick={() => handleClick(tag)}
                                size="medium"
                                label={tag}
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                }}
                            />
                        ))
                    ) : (
                        <Typography variant="body2">No tags available</Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'row',
                        gap: 1,
                        width: { xs: '100%', md: 'fit-content' },
                        overflow: 'auto',
                    }}
                >
                    <Search />
                    <IconButton size="small" aria-label="RSS feed">
                        <RssFeedRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Grid container spacing={2} columns={12}>
                {articles.map((article, index) => (
                    <Grid key={article.article_id} size={{ xs: 12, md: 4 }}>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === index ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt={article.title}
                                image={`https://picsum.photos/800/450?random=${index + 1}`}
                                sx={{
                                    aspectRatio: '16 / 9',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <SyledCardContent>
                                <Typography gutterBottom variant="caption" component="div">
                                    {article.title}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {article.title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {article.content}
                                </StyledTypography>
                                <Typography variant="caption" color="text.secondary">
                                    {article.publish_date && format(new Date(article.publish_date), 'MMMM dd, yyyy')}
                                </Typography>
                            </SyledCardContent>
                            <Author authors={[]} />
                        </SyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
