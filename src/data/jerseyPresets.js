const jerseyPresets = [
  {
      "type": 13,
      "colors": "#002B87,#002B87,#002B87,#002B87,#888888,#FBED32,#999999,#00C1BA,#F0F0F0,#679FEA,#5C8FAE"
  },
  {
      "type": 12,
      "colors": "#C40010,#C40010,#C40010,#C40010,#C40010,#5C8FAE,#B0E8E6,#262626,#002B87,#00C1BA,#999999"
  },
  {
      "type": 14,
      "colors": "#262626,#262626,#262626,#262626,#262626,#0046A8,#B0E8E6,#832034,#262626,#F0F0F0,#002B87"
  },
  {
      "type": 15,
      "colors": "#832034,#832034,#832034,#832034,#832034,#888888,#832034,#262626,#79ADE2,#679FEA,#F0F0F0"
  },
  {
      "type": 16,
      "colors": "#888888,#888888,#888888,#888888,#262626,#0046A8,#FFDF1B,#002B87,#00C1BA,#F0F0F0,#679FEA"
  },
  {
      "type": 12,
      "colors": "#999999,#999999,#999999,#999999,#999999,#00C1BA,#FFDF1B,#C40010,#0046A8,#888888,#B0E8E6"
  },
  {
      "type": 17,
      "colors": "#999999,#999999,#999999,#999999,#F0F0F0,#482F8A,#0046A8,#5C8FAE,#679FEA,#C40010,#262626"
  },
  {
      "type": 13,
      "colors": "#C40010,#C40010,#C40010,#C40010,#888888,#00C1BA,#0046A8,#002B87,#C40010,#0A0A0A,#FBED32"
  },
  {
      "type": 10,
      "colors": "#0046A8,#0046A8,#0046A8,#0046A8,#F0F0F0,#C40010,#999999,#B0E8E6,#FBED32,#0046A8,#5C8FAE"
  },
  {
      "type": 15,
      "colors": "#79ADE2,#79ADE2,#79ADE2,#79ADE2,#79ADE2,#00C1BA,#79ADE2,#999999,#832034,#F0F0F0,#482F8A"
  },
  {
      "type": 10,
      "colors": "#0046A8,#0046A8,#0046A8,#0046A8,#5C8FAE,#679FEA,#002B87,#999999,#B0E8E6,#FFDF1B,#C40010"
  },
  {
      "type": 18,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#B0E8E6,#FFDF1B,#999999,#679FEA,#002B87,#262626,#F0F0F0"
  },
  {
      "type": 15,
      "colors": "#999999,#999999,#999999,#999999,#832034,#F0F0F0,#002B87,#679FEA,#5C8FAE,#00C1BA,#B0E8E6"
  },
  {
      "type": 14,
      "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#79ADE2,#FFDF1B,#00C1BA,#888888,#C40010,#F0F0F0"
  },
  {
      "type": 18,
      "colors": "#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#679FEA,#0046A8,#482F8A,#C40010,#00C1BA,#FFDF1B,#262626"
  },
  {
      "type": 11,
      "colors": "#C40010,#C40010,#C40010,#C40010,#C40010,#262626,#002B87,#482F8A,#832034,#B0E8E6,#FFDF1B"
  },
  {
      "type": 16,
      "colors": "#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#0A0A0A,#C40010,#482F8A,#FFDF1B,#79ADE2,#679FEA,#0046A8"
  },
  {
      "type": 17,
      "colors": "#002B87,#002B87,#002B87,#002B87,#FFDF1B,#888888,#0046A8,#79ADE2,#002B87,#0A0A0A,#5C8FAE"
  },
  {
      "type": 16,
      "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#00C1BA,#679FEA,#482F8A,#FBED32,#C40010,#999999,#F0F0F0"
  },
  {
      "type": 13,
      "colors": "#FFDF1B,#FFDF1B,#FFDF1B,#FFDF1B,#0A0A0A,#679FEA,#5C8FAE,#0046A8,#F0F0F0,#FFDF1B,#482F8A"
  },
  {
      "type": 14,
      "colors": "#262626,#262626,#262626,#262626,#C40010,#482F8A,#FFDF1B,#0046A8,#79ADE2,#F0F0F0,#002B87"
  },
  {
      "type": 12,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#00C1BA,#999999,#FBED32,#679FEA,#79ADE2,#482F8A,#FFDF1B"
  },
  {
      "type": 11,
      "colors": "#832034,#832034,#832034,#832034,#832034,#262626,#0A0A0A,#832034,#C40010,#679FEA,#482F8A"
  },
  {
      "type": 10,
      "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#002B87,#482F8A,#832034,#FBED32,#00C1BA,#999999,#5C8FAE"
  },
  {
      "type": 10,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#888888,#FFDF1B,#999999,#FBED32,#679FEA,#002B87"
  },
  {
      "type": 15,
      "colors": "#0046A8,#0046A8,#0046A8,#0046A8,#0046A8,#832034,#F0F0F0,#FFDF1B,#79ADE2,#0046A8,#FBED32"
  },
  {
      "type": 10,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#002B87,#262626,#FBED32,#B0E8E6,#5C8FAE,#F0F0F0"
  },
  {
      "type": 16,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#999999,#00C1BA,#888888,#0046A8,#5C8FAE,#79ADE2,#FBED32"
  },
  {
      "type": 18,
      "colors": "#832034,#832034,#832034,#832034,#832034,#002B87,#0A0A0A,#5C8FAE,#482F8A,#262626,#FFDF1B"
  },
  {
      "type": 14,
      "colors": "#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#679FEA,#999999,#482F8A,#C40010,#832034"
  },
  {
      "type": 15,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#002B87,#0A0A0A,#262626,#0046A8,#F0F0F0,#999999,#C40010"
  },
  {
      "type": 15,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#FBED32,#832034,#FFDF1B,#888888,#002B87,#B0E8E6,#F0F0F0"
  },
  {
      "type": 10,
      "colors": "#FFDF1B,#FFDF1B,#FFDF1B,#FFDF1B,#888888,#B0E8E6,#482F8A,#262626,#FBED32,#79ADE2,#679FEA"
  },
  {
      "type": 16,
      "colors": "#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#B0E8E6,#0046A8,#0A0A0A,#F0F0F0,#5C8FAE,#FFDF1B,#888888"
  },
  {
      "type": 18,
      "colors": "#888888,#888888,#888888,#888888,#888888,#888888,#5C8FAE,#262626,#002B87,#FFDF1B,#F0F0F0"
  },
  {
      "type": 11,
      "colors": "#FBED32,#FBED32,#FBED32,#FBED32,#79ADE2,#0A0A0A,#B0E8E6,#0046A8,#832034,#482F8A,#5C8FAE"
  },
  {
      "type": 16,
      "colors": "#999999,#999999,#999999,#999999,#5C8FAE,#482F8A,#0A0A0A,#999999,#00C1BA,#002B87,#B0E8E6"
  },
  {
      "type": 12,
      "colors": "#002B87,#002B87,#002B87,#002B87,#679FEA,#B0E8E6,#482F8A,#888888,#002B87,#FFDF1B,#0046A8"
  },
  {
      "type": 12,
      "colors": "#888888,#888888,#888888,#888888,#5C8FAE,#999999,#832034,#F0F0F0,#C40010,#00C1BA,#888888"
  },
  {
      "type": 15,
      "colors": "#79ADE2,#79ADE2,#79ADE2,#79ADE2,#79ADE2,#679FEA,#0A0A0A,#002B87,#F0F0F0,#FBED32,#482F8A"
  },
  {
      "type": 16,
      "colors": "#888888,#888888,#888888,#888888,#888888,#C40010,#679FEA,#0046A8,#79ADE2,#888888,#832034"
  },
  {
      "type": 16,
      "colors": "#C40010,#C40010,#C40010,#C40010,#C40010,#999999,#0A0A0A,#262626,#0046A8,#482F8A,#F0F0F0"
  },
  {
      "type": 14,
      "colors": "#482F8A,#482F8A,#482F8A,#482F8A,#262626,#C40010,#0046A8,#002B87,#79ADE2,#888888,#F0F0F0"
  },
  {
      "type": 15,
      "colors": "#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#C40010,#999999,#F0F0F0,#482F8A,#0046A8,#832034"
  },
  {
      "type": 17,
      "colors": "#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#482F8A,#002B87,#262626,#C40010,#832034,#FBED32,#679FEA"
  },
  {
      "type": 17,
      "colors": "#002B87,#002B87,#002B87,#002B87,#002B87,#79ADE2,#482F8A,#002B87,#5C8FAE,#B0E8E6,#F0F0F0"
  },
  {
      "type": 18,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#00C1BA,#482F8A,#C40010,#679FEA,#262626,#0046A8,#999999"
  },
  {
      "type": 16,
      "colors": "#002B87,#002B87,#002B87,#002B87,#002B87,#79ADE2,#FBED32,#999999,#0046A8,#482F8A,#B0E8E6"
  },
  {
      "type": 10,
      "colors": "#888888,#888888,#888888,#888888,#888888,#C40010,#0046A8,#888888,#0A0A0A,#262626,#B0E8E6"
  },
  {
      "type": 13,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#5C8FAE,#F0F0F0,#0046A8,#262626,#FBED32,#002B87,#B0E8E6"
  },
  {
      "type": 13,
      "colors": "#002B87,#002B87,#002B87,#002B87,#0A0A0A,#888888,#832034,#002B87,#679FEA,#0046A8,#FFDF1B"
  },
  {
      "type": 16,
      "colors": "#79ADE2,#79ADE2,#79ADE2,#79ADE2,#79ADE2,#C40010,#FBED32,#0046A8,#262626,#482F8A,#5C8FAE"
  },
  {
      "type": 14,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#482F8A,#B0E8E6,#00C1BA,#832034,#79ADE2,#F0F0F0"
  },
  {
      "type": 13,
      "colors": "#482F8A,#482F8A,#482F8A,#482F8A,#5C8FAE,#999999,#C40010,#0046A8,#FBED32,#832034,#B0E8E6"
  },
  {
      "type": 13,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#5C8FAE,#B0E8E6,#0046A8,#F0F0F0,#262626,#679FEA"
  },
  {
      "type": 18,
      "colors": "#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#C40010,#888888,#00C1BA,#0A0A0A,#999999,#F0F0F0"
  },
  {
      "type": 15,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#999999,#0A0A0A,#79ADE2,#888888,#679FEA,#5C8FAE,#F0F0F0"
  },
  {
      "type": 15,
      "colors": "#999999,#999999,#999999,#999999,#FFDF1B,#79ADE2,#FBED32,#002B87,#0046A8,#888888,#5C8FAE"
  },
  {
      "type": 14,
      "colors": "#482F8A,#482F8A,#482F8A,#482F8A,#C40010,#999999,#0A0A0A,#79ADE2,#832034,#482F8A,#F0F0F0"
  },
  {
      "type": 17,
      "colors": "#0046A8,#0046A8,#0046A8,#0046A8,#0046A8,#002B87,#262626,#0A0A0A,#FFDF1B,#B0E8E6,#79ADE2"
  },
  {
      "type": 10,
      "colors": "#999999,#999999,#999999,#999999,#999999,#0A0A0A,#002B87,#679FEA,#B0E8E6,#00C1BA,#832034"
  },
  {
      "type": 11,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#888888,#999999,#679FEA,#F0F0F0,#0A0A0A,#482F8A"
  },
  {
      "type": 12,
      "colors": "#0046A8,#0046A8,#0046A8,#0046A8,#0046A8,#832034,#262626,#79ADE2,#999999,#FFDF1B,#B0E8E6"
  },
  {
      "type": 17,
      "colors": "#262626,#262626,#262626,#262626,#262626,#79ADE2,#00C1BA,#C40010,#482F8A,#0A0A0A,#FFDF1B"
  },
  {
      "type": 16,
      "colors": "#B0E8E6,#B0E8E6,#B0E8E6,#B0E8E6,#999999,#FBED32,#B0E8E6,#679FEA,#F0F0F0,#482F8A,#0A0A0A"
  },
  {
      "type": 11,
      "colors": "#C40010,#C40010,#C40010,#C40010,#FFDF1B,#0A0A0A,#482F8A,#002B87,#00C1BA,#B0E8E6,#262626"
  },
  {
      "type": 16,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#482F8A,#F0F0F0,#002B87,#262626,#00C1BA,#5C8FAE,#79ADE2"
  },
  {
      "type": 12,
      "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#002B87,#FFDF1B,#5C8FAE,#00C1BA,#79ADE2,#B0E8E6"
  },
  {
      "type": 12,
      "colors": "#79ADE2,#79ADE2,#79ADE2,#79ADE2,#0046A8,#FFDF1B,#0A0A0A,#888888,#482F8A,#262626,#C40010"
  },
  {
      "type": 11,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#C40010,#002B87,#FFDF1B,#5C8FAE,#0A0A0A,#482F8A,#0046A8"
  },
  {
      "type": 13,
      "colors": "#FFDF1B,#FFDF1B,#FFDF1B,#FFDF1B,#C40010,#F0F0F0,#79ADE2,#0046A8,#00C1BA,#FBED32,#482F8A"
  },
  {
      "type": 15,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#00C1BA,#832034,#0A0A0A,#B0E8E6,#00C1BA,#F0F0F0,#679FEA"
  },
  {
      "type": 13,
      "colors": "#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#79ADE2,#679FEA,#0A0A0A,#FFDF1B,#832034,#999999"
  },
  {
      "type": 18,
      "colors": "#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#0046A8,#262626,#F0F0F0,#5C8FAE,#888888,#679FEA,#79ADE2"
  },
  {
      "type": 13,
      "colors": "#FBED32,#FBED32,#FBED32,#FBED32,#FBED32,#0046A8,#C40010,#832034,#482F8A,#262626,#0A0A0A"
  },
  {
      "type": 10,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#79ADE2,#5C8FAE,#B0E8E6,#482F8A,#F0F0F0,#C40010,#FBED32"
  },
  {
      "type": 12,
      "colors": "#832034,#832034,#832034,#832034,#C40010,#0046A8,#999999,#FFDF1B,#262626,#888888,#0A0A0A"
  },
  {
      "type": 14,
      "colors": "#262626,#262626,#262626,#262626,#FFDF1B,#888888,#0A0A0A,#F0F0F0,#002B87,#79ADE2,#5C8FAE"
  },
  {
      "type": 11,
      "colors": "#FBED32,#FBED32,#FBED32,#FBED32,#FBED32,#0A0A0A,#482F8A,#F0F0F0,#999999,#5C8FAE,#832034"
  },
  {
      "type": 15,
      "colors": "#262626,#262626,#262626,#262626,#00C1BA,#79ADE2,#262626,#B0E8E6,#5C8FAE,#999999,#482F8A"
  },
  {
      "type": 15,
      "colors": "#262626,#262626,#262626,#262626,#262626,#832034,#482F8A,#F0F0F0,#FBED32,#5C8FAE,#00C1BA"
  },
  {
      "type": 13,
      "colors": "#C40010,#C40010,#C40010,#C40010,#482F8A,#0046A8,#0A0A0A,#FFDF1B,#002B87,#999999,#262626"
  },
  {
      "type": 15,
      "colors": "#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#5C8FAE,#002B87,#B0E8E6,#832034,#C40010,#F0F0F0,#679FEA"
  },
  {
      "type": 17,
      "colors": "#C40010,#C40010,#C40010,#C40010,#482F8A,#FBED32,#00C1BA,#0A0A0A,#999999,#679FEA,#0046A8"
  },
  {
      "type": 12,
      "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#262626,#679FEA,#00C1BA,#832034,#5C8FAE,#0046A8,#FBED32"
  },
  {
      "type": 18,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#679FEA,#679FEA,#FFDF1B,#262626,#002B87,#5C8FAE,#999999"
  },
  {
      "type": 10,
      "colors": "#999999,#999999,#999999,#999999,#262626,#999999,#5C8FAE,#00C1BA,#482F8A,#79ADE2,#888888"
  },
  {
      "type": 14,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#679FEA,#FBED32,#0046A8,#0A0A0A,#C40010,#FFDF1B,#999999"
  },
  {
      "type": 16,
      "colors": "#888888,#888888,#888888,#888888,#888888,#F0F0F0,#79ADE2,#0046A8,#262626,#002B87,#C40010"
  },
  {
      "type": 10,
      "colors": "#262626,#262626,#262626,#262626,#262626,#5C8FAE,#999999,#888888,#B0E8E6,#482F8A,#832034"
  },
  {
      "type": 18,
      "colors": "#FBED32,#FBED32,#FBED32,#FBED32,#5C8FAE,#0A0A0A,#FFDF1B,#002B87,#679FEA,#999999,#F0F0F0"
  },
  {
      "type": 11,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#B0E8E6,#0A0A0A,#002B87,#C40010,#FBED32,#482F8A"
  },
  {
      "type": 18,
      "colors": "#482F8A,#482F8A,#482F8A,#482F8A,#0A0A0A,#FBED32,#888888,#482F8A,#C40010,#999999,#262626"
  },
  {
      "type": 11,
      "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#888888,#F0F0F0,#262626,#482F8A,#FBED32,#0046A8,#5C8FAE"
  },
  {
      "type": 14,
      "colors": "#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#482F8A,#F0F0F0,#0A0A0A,#79ADE2,#999999,#00C1BA,#FFDF1B"
  },
  {
      "type": 12,
      "colors": "#00C1BA,#00C1BA,#00C1BA,#00C1BA,#F0F0F0,#0046A8,#262626,#B0E8E6,#FBED32,#999999,#002B87"
  },
  {
      "type": 11,
      "colors": "#C40010,#C40010,#C40010,#C40010,#679FEA,#B0E8E6,#5C8FAE,#482F8A,#F0F0F0,#79ADE2,#0A0A0A"
  },
  {
      "type": 16,
      "colors": "#679FEA,#679FEA,#679FEA,#679FEA,#5C8FAE,#679FEA,#FFDF1B,#002B87,#999999,#B0E8E6,#F0F0F0"
  },
  {
      "type": 14,
      "colors": "#832034,#832034,#832034,#832034,#482F8A,#FBED32,#002B87,#C40010,#FFDF1B,#832034,#00C1BA"
  },
  {
      "type": 13,
      "colors": "#FFDF1B,#FFDF1B,#FFDF1B,#FFDF1B,#FFDF1B,#FBED32,#5C8FAE,#262626,#832034,#F0F0F0,#FFDF1B"
  }
]

export default jerseyPresets;