// import express from "express";
import graphQLServer from './graphQLServer';
// const app = express();
// const port = 3030; // default port to listen
const graphQLPort = 3030

const mockData = [
    {
        id: 1,
        teams: [
            {
                id: 1,
                name: 'teamA',
                logo: 'logo',
                count: 0,
                redCards: 0,
            }
        ],
        gameStatus: '1',
        time: Date.now(),
    }
]

console.log(mockData);

void graphQLServer.start({
    port: graphQLPort
}, () => console.log(`GraphQL Server is running on http://localhost:${graphQLPort}`))

// // define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );

// // start the Express server
// app.listen( port, () => {
//     console.log( `server started at http://localhost:${ port }` );
// } );