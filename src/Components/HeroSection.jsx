import * as React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material'; // Import Grid
import styled from '@emotion/styled';
import intersect from '../assets/hmm.jpeg'; // Adjust the path to the logo
import heart from '../assets/heart.png'; // Adjust the path to the logo
import girl from '../assets/girl.png'; // Adjust the path to the logo
import salad from '../assets/salad.png'; // Adjust the path to the logo
import cup from '../assets/cup.png'; // Adjust the path to the logo
import ha from '../assets/ha.jpg'; // Adjust the path to the logo
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
                            <img width="100%" src={ha} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
                            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>Main Dish</Typography>
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
                            <img width="100%" src={ha} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
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
                            <img width="100%" src={ha} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
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
                            <img width="100%" src={ha} alt="" style={{ maxWidth: '100px', height: 'auto' }} />
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
                            <ArrowBackIosIcon />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", height: "50px",
                            width: "50px", backgroundColor: "#fff",
                            boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                            borderRadius: "50px"
                        }}>
                            <ArrowForwardIosIcon />
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
                            <img width="100%" src={heart} alt="" style={{ position: "relative", bottom: "58px", left: "153px", maxWidth: '100px', height: 'auto' }} />
                            <Box sx={{ marginTop: "-70px" }}>
                                <img width="100%" src={salad} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
                                <Typography sx={{ fontWeight: "700" }}>Fattoush salad</Typography>
                                <Typography variant='body1'>Description of the item</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontWeight: "700" }}>
                                        <span style={{ color: "red" }}>$</span>24.00
                                    </Typography>
                                    <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", fontSize: "14px", fontWeight: "bold", gap: "5px" }}>
                                        <StarIcon sx={{ fontSize: "16px" }} />
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
                            <img width="100%" src={heart} alt="" style={{ position: "relative", bottom: "58px", left: "153px", maxWidth: '100px', height: 'auto' }} />
                            <Box sx={{ marginTop: "-70px" }}>
                                <img width="100%" src={salad} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
                                <Typography sx={{ fontWeight: "700" }}>Fattoush salad</Typography>
                                <Typography variant='body1'>Description of the item</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontWeight: "700" }}>
                                        <span style={{ color: "red" }}>$</span>24.00
                                    </Typography>
                                    <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", fontSize: "14px", fontWeight: "bold", gap: "5px" }}>
                                        <StarIcon sx={{ fontSize: "16px" }} />
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
                            <img width="100%" src={heart} alt="" style={{ position: "relative", bottom: "58px", left: "153px", maxWidth: '100px', height: 'auto' }} />
                            <Box sx={{ marginTop: "-70px" }}>
                                <img width="100%" src={salad} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
                                <Typography sx={{ fontWeight: "700" }}>Fattoush salad</Typography>
                                <Typography variant='body1'>Description of the item</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography sx={{ fontWeight: "700" }}>
                                        <span style={{ color: "red" }}>$</span>24.00
                                    </Typography>
                                    <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", fontSize: "14px", fontWeight: "bold", gap: "5px" }}>
                                        <StarIcon sx={{ fontSize: "16px" }} />
                                        4.6
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                        <Box>
                            <img width="100%" src={girl} alt="" style={{ maxWidth: '450px', height: 'auto' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{
                            padding: "70px",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "start",
                            gap: "20px",
                            flexDirection: "column"
                        }}>
                            <Typography sx={{ color: "red" }}>
                                Testimonials
                            </Typography>
                            <Typography sx={{ textAlign: "start", fontSize: { xs: "25px", md: "35px" }, fontWeight: "900" }}>
                                What Our <span style={{ color: "#3ADA4C" }}>Customers</span> Say About Us
                            </Typography>
                            <Typography sx={{ textAlign: "start", fontSize: { xs: "14px", md: "16px" }, fontWeight: "400" }}>
                                “I had the pleasure of dining at Foodi last night,
                                and I'm still raving about the experience!
                                The attention to detail in presentation
                                and service was impeccable”
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

                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Box sx={{
                            padding: "70px",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "start",
                            gap: "20px",
                            flexDirection: "column"
                        }}>
                            <Typography sx={{ color: "red" }}>
                                Our Story & Services
                            </Typography>
                            <Typography sx={{ textAlign: "start", fontSize: { xs: "25px", md: "35px" }, fontWeight: "900" }}>
                                Our Culinary <span style={{ color: "#3ADA4C" }}>Journey</span> And Services.
                            </Typography>
                            <Typography sx={{ textAlign: "start", fontSize: { xs: "14px", md: "16px" }, fontWeight: "400" }}>
                                Rooted in passion, we curate unforgettable dining experiences
                                and offer exceptional services, blending culinary artistry with warm hospitality.
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "start", width: "100%", gap: "60px", alignItems: "center", }}>
                                <Button variant='contained'>Explore</Button>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center", flexDirection: "column",
                                height: "200px", width: "200px",
                                borderRadius: "15px",
                                boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                            }}>
                                <img width="100%" src={cup} alt="" style={{ maxWidth: '60px', height: 'auto' }} />

                                <Typography sx={{ fontSize: "16PX", color: "#3ada4c", fontWeight: "bold" }} variant='h6'>CATERING</Typography>
                                <Typography sx={{ textAlign: "center", color: "#3ada4c", fontSize: "14px" }}>Delight your guests with our flavors and  presentation</Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center", flexDirection: "column",
                                height: "200px", width: "200px",
                                borderRadius: "15px",
                                boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                            }}>
                                <img width="100%" src={cup} alt="" style={{ maxWidth: '60px', height: 'auto' }} />

                                <Typography sx={{ fontSize: "16PX", color: "#3ada4c", fontWeight: "bold" }} variant='h6'>FAST DELIVERY</Typography>
                                <Typography sx={{ padding: "0px 10px", textAlign: "center", color: "#3ada4c", fontSize: "14px" }}>We deliver your order promptly to your door</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center", flexDirection: "column",
                                height: "200px", width: "200px",
                                borderRadius: "15px",
                                boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                            }}>
                                <img width="100%" src={cup} alt="" style={{ maxWidth: '60px', height: 'auto' }} />

                                <Typography sx={{ fontSize: "16PX", color: "#3ada4c", fontWeight: "bold" }} variant='h6'>ONLINE ORDERING</Typography>
                                <Typography sx={{ padding: "0px 10px", textAlign: "center", color: "#3ada4c", fontSize: "14px" }}>Explore menu & order with ease using our Online Ordering </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center", flexDirection: "column",
                                height: "200px", width: "200px",
                                borderRadius: "15px",
                                boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
                            }}>
                                <img width="100%" src={cup} alt="" style={{ maxWidth: '60px', height: 'auto' }} />

                                <Typography sx={{ fontSize: "16PX", color: "#3ada4c", fontWeight: "bold" }} variant='h6'>GIFT CARDS</Typography>
                                <Typography sx={{ textAlign: "center", color: "#3ada4c", fontSize: "14px" }}>Give the gift of exceptional dining with Foodi Gift Cards</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Root >
    );
};

export default HeroSection;
