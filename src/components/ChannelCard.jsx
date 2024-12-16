import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ChannelDetail, marginTop}) => (
     <Box
      sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop
      }}
     >
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
        <CardContent
         sx={{display:'flex', flexDirection:'column', justifyContent:'center',textAlign:'center', color:'#fff'}}
        >
         <CardMedia
          image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={ChannelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        </CardContent>

        <Typography
         variant="h6"
         color={'white'}
         
        >
          {ChannelDetail ?.snippet ?.title}
          <CheckCircleIcon sx={{ fontSize: "14", color: "gray", ml: "5px" }} />
        </Typography>
        {ChannelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      
      </Link>
     
    </Box>
  )

export default ChannelCard;