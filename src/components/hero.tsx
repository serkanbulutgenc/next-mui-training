import { Box, Button, Stack, Typography } from "@mui/material";
import heroImage from '@/assets/hero-banner.jpg'

export default function HeroSection(){
    return <Box component={'section'} sx={{ position:'relative', minHeight:'30rem', backgroundImage:`url(${heroImage.src})`, backgroundPosition:'center center'}}>
        {/* <Image src={heroImage} alt="hero image" fill/> */}
        <Box sx={{position:'absolute', width:'auto', height:'auto', p:2, top:'50%', left:'5%'}}>
            <Stack spacing={2} useFlexGap>
            <Typography variant="body1" color="textSecondary" component={'div'}>New Inspiration 2020</Typography>
            <Typography variant="h4" color="textPrimary" component={'p'} sx={{textTransform:'uppercase'}}>20% off on new season</Typography>
            <Button variant={'contained'} color={'warning'} size={'large'}>Browse Collection</Button>
            </Stack>
        </Box>
    </Box>
}