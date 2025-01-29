import { expect } from 'chai';
import axios from 'axios';
import { getAllUsersByRole } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config();

describe("Withdraw Money", async () => {

    it("Withdraw from Customer 1 Account", async () => {

        const agents = getAllUsersByRole("Agent");
        const customers = getAllUsersByRole("Customer");

        if (agents.length === 0 || customers.length === 0) return;

        const agent = agents[0];
        const customer1 = customers[0];

        const { data } = await axios.post(`${process.env.baseURL}/transaction/withdraw`, {
            "from_account": customer1.phone_number,
            "to_account": agent.phone_number,
            "amount": 500
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })

        console.log(data);
        expect(data.message).to.equal("Withdraw successful");

    })

})