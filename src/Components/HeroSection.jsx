import * as React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'; // Import Grid
import styled from '@emotion/styled';
import intersect from '../assets/hmm.jpeg'; // Adjust the path to the logo
import heart from '../assets/heart.png'; // Adjust the path to the logo
import salad from '../assets/salad.png'; // Adjust the path to the logo
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
const Root = styled(Box)(({ theme }) => ({
    "& .root": {
        backgroundColor: "#FAFAFA",
        "& .MuiGrid-root": {
            padding: "20px"
        },
        "& .MuiButtonBase-root": {
            padding: "10px 25px",
            backgroundColor: "#3ADA4C",
            borderRadius: "30px",
            textTransform: "none"
        },
    },
    "& .MuiPaper-root": {
        backgroundColor: "#FAFAFA",
        color: "gray"
    }
}));

const HeroSection = () => {
    return (
        <Root>
            <Box className='root'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Box sx={{
                            padding: "70px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "30px",
                            flexDirection: "column"
                        }}>
                            <Typography sx={{ textAlign: "start", fontSize: { xs: "32px", md: "45px" }, fontWeight: "900" }}>
                                Dive into Delights Of Delectable <span style={{ color: "#3ADA4C" }}>Food</span>
                            </Typography>
                            <Typography sx={{ textAlign: "start", fontSize: { xs: "14px", md: "16px" }, fontWeight: "400" }}>
                                Where Each Plate Weaves a Story of Culinary Ma2stery and Passionate Craftsmanship
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "start", width: "100%", gap: "60px", alignItems: "center", }}>
                                <Button variant='contained'>Order Now</Button>
                                <Typography sx={{ textAlign: "center" }}>
                                    Watch Now
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center", height: "30px",
                                    width: "30px", backgroundColor: "#fff",
                                    boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                                    borderRadius: "50px"
                                }}>
                                    <PlayArrowIcon />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                        <Box>
                            <img width="100%" src={intersect} alt="" style={{ maxWidth: '450px', height: 'auto' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ textAlign: "center", fontSize: { xs: "32px", md: "45px" }, fontWeight: "900" }}>
                        Popular Catogries
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} container alignItems="center" justifyContent="center">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "300px", width: "300px",
                            borderRadius: "15px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={intersect} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
                            <Typography>Main Dish</Typography>
                            <Typography>(86 dishes)</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} container alignItems="center" justifyContent="center">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "300px", width: "300px",
                            borderRadius: "15px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={intersect} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
                            <Typography>Main Dish</Typography>
                            <Typography>(86 dishes)</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} container alignItems="center" justifyContent="center">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "300px", width: "300px",
                            borderRadius: "15px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={intersect} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
                            <Typography>Main Dish</Typography>
                            <Typography>(86 dishes)</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} container alignItems="center" justifyContent="center">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "300px", width: "300px",
                            borderRadius: "15px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={intersect} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
                            <Typography>Main Dish</Typography>
                            <Typography>(86 dishes)</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                        <Box>
                            <Typography sx={{ color: "red" }}>
                                SPECIAL DISHES
                            </Typography>
                            <Typography sx={{ textAlign: "", fontSize: { xs: "32px", md: "45px" }, fontWeight: "900" }}>
                                Standout Dishes From Our Menu
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} container alignItems="center" justifyContent="end">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", height: "50px",
                            width: "50px", backgroundColor: "#fff",
                            boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                            borderRadius: "50px"
                        }}>
                            <PlayArrowIcon />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", height: "50px",
                            width: "50px", backgroundColor: "#fff",
                            boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                            borderRadius: "50px"
                        }}>
                            <PlayArrowIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} container alignItems="center" justifyContent="center">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "400px", width: "400px",
                            borderRadius: "35px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={heart} alt="" style={{ position: "relative", bottom: "55px", left: "153px", maxWidth: '100px', height: 'auto' }} />
                            <Box sx={{ marginTop: "-70px" }}>
                                <img width="100%" src={salad} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
                                <Typography>Fattoush salad</Typography>
                                <Typography>Description of the item</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography>
                                        $24.00
                                    </Typography>
                                    <Typography>
                                        <StarIcon />
                                        4.6
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} container alignItems="center" justifyContent="end">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "400px", width: "400px",
                            borderRadius: "35px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={heart} alt="" style={{ position: "relative", bottom: "55px", left: "153px", maxWidth: '100px', height: 'auto' }} />
                            <Box sx={{ marginTop: "-70px" }}>
                                <img width="100%" src={salad} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
                                <Typography>Fattoush salad</Typography>
                                <Typography>Description of the item</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography>
                                        $24.00
                                    </Typography>
                                    <Typography>
                                        <StarIcon />
                                        4.6
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} container alignItems="center" justifyContent="end">
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", flexDirection: "column",
                            height: "400px", width: "400px",
                            borderRadius: "35px",
                            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                        }}>
                            <img width="100%" src={heart} alt="" style={{ position: "relative", bottom: "55px", left: "153px", maxWidth: '100px', height: 'auto' }} />
                            <Box sx={{ marginTop: "-70px" }}>
                                <img width="100%" src={salad} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
                                <Typography>Fattoush salad</Typography>
                                <Typography>Description of the item</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography>
                                        $24.00
                                    </Typography>
                                    <Typography>
                                        <StarIcon />
                                        4.6
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Root >
    );
};

export default HeroSection;
