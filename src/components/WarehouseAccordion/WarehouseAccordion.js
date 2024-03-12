import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './WarehouseAccordion.css';

const WarehouseAccordion = () => {
  return (
    <div>
      <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            backgroundColor: 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 800,
              backgroundColor: 'transparent',
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            Select Warehouse
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} sx={{ textAlign: 'left' }}>
            <div className='warehouse-accordion-option'>Warehouse 1</div>
            <div className='warehouse-accordion-option'>Warehouse 2</div>
            <div className='warehouse-accordion-option'>Warehouse 3</div>
            <div className='warehouse-accordion-option'>Warehouse 4</div>
            <div className='warehouse-accordion-option'>Warehouse 5</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default WarehouseAccordion;
