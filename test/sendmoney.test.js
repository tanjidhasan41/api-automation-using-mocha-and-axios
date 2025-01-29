import { expect } from 'chai';
import axios from 'axios';
import { getAllUsersByRole } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config();

describe("Send Money", async () => {

    it("Send Money from Customer 1 to Customer 2", async () => {

        const customers = getAllUsersByRole("Customer");

        if (customers.length < 2) {
            console.error("Not enough customers to run the test.");
            return;
        }

        const customer1 = customers[0];
        const customer2 = customers[1];

        const { data } = await axios.post(`${process.env.baseURL}/transaction/sendmoney`, {
            "from_account": customer1.phone_number,
            "to_account": customer2.phone_number,
            "amount": 500
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })

        console.log(data);
        expect(data.message).to.equal("Send money successful");

    })

})