import { expect } from 'chai';
import axios from 'axios';
import { getAllUsersByRole } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config();

describe("Check Balance", async () => {

    it("Check Customer 2 Balance", async () => {

        const customers = getAllUsersByRole("Customer");

        if (customers.length < 2) return;

        const customer2 = customers[1];

        const { data } = await axios.get(`${process.env.baseURL}/transaction/balance/${customer2.phone_number}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })

        console.log(data)
        expect(data.message).to.equal("User balance");

    })

})
