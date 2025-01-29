import { expect } from 'chai';
import axios from 'axios';
import { getAllUsersByRole } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config();

describe("Deposit Money", async () => {

    it("Deposit to Agent from System Account", async () => {

        const agents = getAllUsersByRole("Agent");
        if (agents.length === 0) return;

        const agent = agents[0];

        const { data } = await axios.post(`${process.env.baseURL}/transaction/deposit`, {
            "from_account": "SYSTEM",
            "to_account": agent.phone_number,
            "amount": 2000
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })

        console.log(data);
        expect(data.message).to.equal("Deposit successful");

    })

    it("Deposit to Customer 1 from Agent", async () => {

        const agents = getAllUsersByRole("Agent");
        const customers = getAllUsersByRole("Customer");

        if (agents.length === 0 || customers.length === 0) return;

        const agent = agents[0];
        const customer1 = customers[0];

        const { data } = await axios.post(`${process.env.baseURL}/transaction/deposit`, {
            "from_account": agent.phone_number,
            "to_account": customer1.phone_number,
            "amount": 1500
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })

        console.log(data);
        expect(data.message).to.equal("Deposit successful");

    })

})