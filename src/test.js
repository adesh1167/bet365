SELECT bet_id, tx_type, amount * 0.05 as amount, balance * 0.05 as balance, for_user, tx_time FROM `transactions` WHERE for_user = 1 ORDER BY tx_time ASC;

temp1.filter(item => item.KC).map(data => ({
    type: data.KI,
    color: data.KC
}))