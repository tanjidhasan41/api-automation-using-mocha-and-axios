# API Automation using Mocha and Axios  

This project automates API testing for the **Dmoney API** using **Mocha** and **Axios**. The automation script performs a sequence of financial transactions, including user creation, deposits, withdrawals, and payments.  

## **Project Description**  
This automation script follows a structured workflow to test various API endpoints in **Dmoney API**. The workflow includes:  
1. **Admin Login** – Authenticate using admin credentials.  
2. **User Creation** – Create two customers and one agent.  
3. **System Deposit** – Transfer funds from the system account to the agent.  
4. **Customer Deposit** – Deposit money from the agent to a customer.  
5. **Customer Withdrawal** – Withdraw money from a customer to the agent.  
6. **Money Transfer** – Send money from one customer to another.  
7. **Merchant Payment** – Pay a merchant from the recipient customer's account.  
8. **Balance Check** – Verify the recipient customer’s balance.  

## **Prerequisites**  
Before running the automation scripts, ensure you have the following installed:  

- **Node.js** (v16 or later)  
- **npm** (Node Package Manager)  
- **Mocha** (installed via npm)  
- **Axios** (installed via npm)  

## **What I Have Done**  
- Created automation scripts for API transactions using **Mocha** and **Axios**.  
- Stored sensitive credentials (e.g., `baseUrl`, `partnerKey`, `token`) in a **`.env`** file.  
- Managed user details dynamically using a **JSON file** for seamless transaction chaining.  
- Ensured proper logging and validations for each API response.  

## **How to Run the Tests**  
Follow these steps to execute the tests:  

### **1️⃣ Clone the Repository**  
### **2️⃣ Install Dependencies**
### **3️⃣ Configure Environment Variables**
### **4️⃣ Run the Automation Scripts**

## **Reports**

![image](https://github.com/user-attachments/assets/c81ffa9e-1701-4dfe-ba27-34d3a1560bb4)


## **📢 Notes**
- *The script assumes that the API follows a RESTful pattern.*
- *Ensure valid credentials in ```.env``` before running tests.*
- *Modify ```users.json``` as needed for different test scenarios.*
