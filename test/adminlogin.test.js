import { expect } from 'chai';
import axios from 'axios';
import storeToken from '../utils/setEnvVar.js';
import { faker } from '@faker-js/faker';
import generateRandomNumber from '../utils/utils.js';
import { saveToJSONFile } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config();

describe("Admin Login and Create User", async () => {

    it("Admin can login with valid creds", async () => {
        const { data } = await axios.post(`${process.env.baseURL}/user/login`, {
            "email": `${process.env.email}`,
            "password": `${process.env.password}`,
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        console.log(data.token);
        expect(data.message).to.equal("Login successful");
        storeToken("token", data.token);
    })

    it("Admin can create Customer 1", async () => {
        const { data } = await axios.post(`${process.env.baseURL}/user/create`, {
            "name": `${faker.person.fullName()}`,
            "email": `${faker.internet.email().toLowerCase()}`,
            "password": "1234",
            "phone_number": `0171${generateRandomNumber(1000000, 9999999)}`,
            "nid": "123456789",
            "role": "Customer"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })
        console.log(data)
        saveToJSONFile({
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            phone_number: data.user.phone_number,
            role: "Customer"
        });

    })

    it("Admin can create Customer 2", async () => {
        const { data } = await axios.post(`${process.env.baseURL}/user/create`, {
            "name": `${faker.person.fullName()}`,
            "email": `${faker.internet.email().toLowerCase()}`,
            "password": "1234",
            "phone_number": `0171${generateRandomNumber(1000000, 9999999)}`,
            "nid": "123456789",
            "role": "Customer"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })
        console.log(data)
        saveToJSONFile({
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            phone_number: data.user.phone_number,
            role: "Customer"
        });

    })

    it("Admin can create Agent", async () => {
        const { data } = await axios.post(`${process.env.baseURL}/user/create`, {
            "name": `${faker.person.fullName()}`,
            "email": `${faker.internet.email().toLowerCase()}`,
            "password": "1234",
            "phone_number": `0171${generateRandomNumber(1000000, 9999999)}`,
            "nid": "123456789",
            "role": "Agent"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })
        console.log(data)
        saveToJSONFile({
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            phone_number: data.user.phone_number,
            role: "Agent"
        });

    })

    it("Admin can create Merchant", async () => {
        const { data } = await axios.post(`${process.env.baseURL}/user/create`, {
            "name": `${faker.person.fullName()}`,
            "email": `${faker.internet.email().toLowerCase()}`,
            "password": "1234",
            "phone_number": `0171${generateRandomNumber(1000000, 9999999)}`,
            "nid": "123456789",
            "role": "Merchant"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.token}`,
                "X-AUTH-SECRET-KEY": `${process.env.secretKey}`
            }
        })
        console.log(data)
        saveToJSONFile({
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            phone_number: data.user.phone_number,
            role: "Merchant"
        });

    })

})