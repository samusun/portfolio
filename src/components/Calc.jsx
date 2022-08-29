import { Slider, Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

function Calc() {
  const [amount, setAmount] = useState(110000);
  const [time, setTime] = useState(6);
  const [months, setMonths] = useState(72);
  const [cost, setCost] = useState(0);
  const yearlyInterest = 0.099;
  const monthlyInterest = yearlyInterest / 12;
  const [message, setMessage] = useState(false)

  const updateAmount = (e) => {
    setAmount(e.target.value);
    calculateCost(e.target.value, months);
  };
  const updateTime = (e) => {
    setTime(e.target.value);
    setMonths(e.target.value * 12);
    calculateCost(amount, e.target.value * 12);
  };

  function calculateCost(Amount, Months) {
    let total =
      (Amount * monthlyInterest * Math.pow(1 + monthlyInterest, Months)) /
      (Math.pow(1 + monthlyInterest, Months) - 1);
    setCost(Math.round(total));
  }
  const sumMarks = [
    {
      value: 20000,
      label: "20 000 kr",
    },
    {
      value: 200000,
      label: "200 000 kr",
    },
  ];

  const timeMarks = [
    {
      value: 2,
      label: "2 år",
    },
    {
      value: 10,
      label: "10 år",
    },
  ];

  useEffect(() => {
    calculateCost(amount, months);
  });

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography
            sx={{
              backgroundColor: "gray",
              color: "white",
              padding: "10px",
              margin:"5px"
            }}
          >
            This was an assignement i got for a job application, calculating how much a loan would cost every month with a given interest.
            <br/> <br/>
             I used Material UI for the slider
          </Typography>
      <Box
        sx={{
          width: "70vw",
        }}
      >
        

        <Typography
          sx={{
            marginBottom: "3.5vh",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Amount
        </Typography>
        <Slider
          sx={{
            height: 16,
          }}
          value={amount}
          onChange={(e) => updateAmount(e)}
          marks={sumMarks}
          aria-label="Always visible"
          color="secondary"
          valueLabelDisplay="on"
          step={10000}
          min={20000}
          max={200000}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "3.5vh",
            color: "white",
          }}
        >
          Time in years
        </Typography>
        <Slider
          sx={{
            height: 16,
          }}
          value={time}
          marks={timeMarks}
          onChange={(e) => updateTime(e)}
          aria-label="Always visible"
          color="secondary"
          valueLabelDisplay="on"
          step={1}
          min={2}
          max={10}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          
          <Typography
            sx={{
              backgroundColor: "purple",
              color: "white",
              padding: "10px",
              marginLeft: "0",
              borderRadius: "5px"
            }}
          >
            Total cost <br /> {cost} SEK / month
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              setMessage(`Requested ${amount} kr, duration ${months} months`)
            }
            sx={{
              fontWeight: "bold",
            }}
          >
            Apply
          </Button>
        </Box>
        <Typography sx={{ color: "white", paddingTop: "10px",}} >{message}</Typography>
      </Box>
    </Box>
  );
}

export default Calc;
