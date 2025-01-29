import { expect } from 'chai';
import axios from 'axios';
import { getAllUsersByRole } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config();

describe("Make Payment", async () => {

    it("Make Payment from Customer 2 to Merchant", async () => {

        const customers = getAllUsersByRole("Customer");
        const merchants = getAllUsersByRole("Merchant");

        if (customers.length < 2 || merchants.length === 0) return;

        const customer2 = customers[1];
        const merchant = merchants[0];

        const { data } = await axios.post(`${process.env.baseURL}/transaction/payment`, {
            "from_account": customer2.phone_number,
            "to_account": merchant.phone_number,
            "amount": 100
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })

        console.log(data);
        expect(data.message).to.equal("Payment successful");

    })

})