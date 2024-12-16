import {useState, useEffect}from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategary, setSelectedCategary] = useState('New');
  const [videos, setVideos] = useState([]);


  useEffect(() => {
   fetchFromAPI(`search?part=snippet&q=${selectedCategary}`).then((data)=>setVideos(data.items));
  }, [selectedCategary])
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

        <Sidebar
          selectedCategary={selectedCategary}
          setSelectedCategary={setSelectedCategary}
         />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JeneshTube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategary} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />

      </Box>
    </Stack>
  );
};

export default Feed;