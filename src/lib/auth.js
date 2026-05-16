import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("Wanderlast-Authentication");


export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    // baseURL: process.env.BETTER_AUTH_URL,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});




// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URL);
// const db = client.db("Wanderlast-Authentication");

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         client
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
//     accountLinking: {
//         enabled: true,
//         trustedProviders: ["google"], // Auto-links if the user matches your Google account email
//     },
//     baseURL: "http://localhost:3000/api/auth" ,    // e.g., "http://localhost:5000"

    // 1. CRITICAL: Allow your frontend domain to read the authentication cookies
    // trustedOrigins: ["http://localhost:3000"],

    // 2. CRITICAL: Handle cross-port/cross-domain cookie sharing safely
    // advanced: {
    //     defaultCookieAttributes: {
    //         sameSite: "none",
    //         secure: true,
    //         httpOnly: true,
    //     },
    // },

//     socialProviders: {
//         google: {
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         },
//     },
// });

