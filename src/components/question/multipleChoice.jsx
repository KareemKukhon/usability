import { Avatar, Box, Chip, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, Stack, Tooltip, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
export function MultipleChoice() {
    return (
      <Box >
        
        <Box textAlign="left">
          <Typography fontWeight="bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus?
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    );
  }