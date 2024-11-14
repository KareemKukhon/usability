import { useTheme } from '@emotion/react';
import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Arabic',
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Russian',
  'Chinese',
  'Japanese',
  'Portuguese',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function TestDetails() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Box
      maxWidth={1000}
      p={3}
      my={2}
      borderRadius={2}
      bgcolor="white"
    >
      <Typography variant="h2" color="#061D29" fontSize={18}>
        Test Details
      </Typography>

      {/* Use Grid for responsive layout */}
      <Grid container spacing={2} mt={4}>
        {/* Left Column: Test Name and Project URL */}
        <Grid item xs={12} md={6}>
          <Typography variant="inherit">Test Name</Typography>
          <TextField
            label="Enter test name"
            sx={{ mt: 1, width: "100%" }}
          />
          <Typography variant="inherit" sx={{ mt: 3 }}>
            Project URL
          </Typography>
          <TextField
            label="Enter project URL"
            sx={{ mt: 1, width: "100%" }}
          />
        </Grid>

        {/* Right Column: Language Select and Gender RadioGroup */}
        <Grid item xs={12} md={6}>
          <Typography variant="inherit">Language</Typography>
          <FormControl sx={{ mt: 1, width: "100%" }}>
            <InputLabel id="demo-multiple-chip-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Language" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ mt: 4, width: "100%" }}>
            <FormLabel id="gender-radio-group-label">Allow participation on</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-radio-group-label"
              name="gender-radio-group"
            >
              <FormControlLabel value="All devices" control={<Radio />} label="All devices" />
              <FormControlLabel value="Mobile only" control={<Radio />} label="Mobile only" />
              <FormControlLabel value="Desktop only" control={<Radio />} label="Desktop only" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
