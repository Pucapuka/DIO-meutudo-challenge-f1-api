import "dotenv/config";
import fastify from "fastify";
import { Server } from "http";

const app = fastify({logger: true});

const teams =[
    {id: 1, name: "Ferrari", },
    {id: 2, name: "Red Bull Racing",},
    {id: 3, name: "Mercedes",},
    {id: 4, name: "McLaren",},
    {id: 5, name: "Alpine",},
    {id: 6, name: "Aston Martin",},
    {id: 7, name: "Alfa Romeo",},
    {id: 8, name: "Haas F1 Team",},
    {id: 9, name: "Williams Racing",},
    {id: 10, name: "Scuderia AlphaTauri",},
    {id: 11, name: "Porsche",},
    {id: 12, name: "Audi",},
    {id: 13, name: "Lotus F1 Team",},
    {id: 14, name: "Sauber F1 Team",},
    {id: 15, name: "Toro Rosso",},
    {id: 16, name: "Force India",},
    {id: 17, name: "Jaguar Racing",},
    {id: 18, name: "Super Aguri",},
    {id: 19, name: "Minardi",},
    {id: 20, name: "Prost Grand Prix",},
    {id: 21, name: "Jordan Grand Prix",},
];

const drivers = [
    {id: 1, name: "Charles Leclerc", teamId: 1, teamName: teams[0].name,},
    {id: 2, name: "Carlos Sainz", teamId: 2, teamName: teams[1].name,},
    {id: 3, name: "Max Verstappen", teamId: 2, teamName: teams[1].name,},
    {id: 4, name: "Lewis Hamilton", teamId: 3, teamName: teams[2].name,},
    {id: 5, name: "Lando Norris", teamId: 4, teamName: teams[3].name,},
    {id: 6, name: "Daniel Ricciardo", teamId: 4, teamName: teams[3].name,},
    {id: 7, name: "Esteban Ocon", teamId: 5, teamName: teams[4].name,},
    {id: 8, name: "Fernando Alonso", teamId: 5, teamName: teams[4].name,},
    {id: 9, name: "Sebastian Vettel", teamId: 6, teamName: teams[5].name,},
    {id: 10, name: "Lance Stroll", teamId: 6, teamName: teams[5].name,},
    {id: 11, name: "Valtteri Bottas", teamId: 7, teamName: teams[6].name,},
    {id: 12, name: "Guanyu Zhou", teamId: 7, teamName: teams[6].name,},
    {id: 13, name: "Kevin Magnussen", teamId: 8, teamName: teams[7].name,},
    {id: 14, name: "Mick Schumacher", teamId: 8, teamName: teams[7].name,},
    {id: 15, name: "Nikita Mazepin", teamId: 8, teamName: teams[7].name,},
    {id: 16, name: "Nicholas Latifi", teamId: 9, teamName: teams[8].name,},
    {id: 17, name: "Alexander Albon", teamId: 9, teamName: teams[8].name,},
    {id: 18, name: "Yuki Tsunoda", teamId: 10, teamName: teams[9].name,},
    {id: 19, name: "Pierre Gasly", teamId: 10, teamName: teams[9].name,},
    {id: 20, name: "Sergio Pérez", teamId: 2, teamName: teams[1].name,},
    {id: 21, name: "George Russell", teamId: 3, teamName: teams[2].name,},
    {id: 22, name: "Oscar Piastri", teamId: 4, teamName: teams[3].name,},
    {id: 23, name: "Nyck de Vries", teamId: 10, teamName: teams[9].name,},
    {id: 24, name: "Logan Sargeant", teamId: 9, teamName: teams[8].name,},
    {id: 25, name: "Robert Kubica", teamId: 7, teamName: teams[6].name,},
    {id: 26, name: "Felipe Drugovich", teamId: 6, teamName: teams[5].name,},
    {id: 27, name: "Oscar Piastri", teamId: 4, teamName: teams[3].name,},
    {id: 28, name: "Mick Schumacher", teamId: 8, teamName: teams[7].name,},
    {id: 29, name: "Lance Stroll", teamId: 6, teamName: teams[5].name,},
    {id: 30, name: "Sebastian Vettel", teamId: 6, teamName: teams[5].name,},
    {id: 31, name: "Daniel Ricciardo", teamId: 4, teamName: teams[3].name,},
    {id: 32, name: "Esteban Ocon", teamId: 5, teamName: teams[4].name,},
    {id: 33, name: "Fernando Alonso", teamId: 5, teamName: teams[4].name,},
    {id: 34, name: "Carlos Sainz", teamId: 2, teamName: teams[1].name,},
    {id: 35, name: "Charles Leclerc", teamId: 1, teamName: teams[0].name,},
    {id: 36, name: "Lewis Hamilton", teamId: 3, teamName: teams[2].name,},
    {id: 37, name: "Max Verstappen", teamId: 2, teamName: teams[1].name,},
    {id: 38, name: "Lando Norris", teamId: 4, teamName: teams[3].name,},
    {id: 39, name: "Valtteri Bottas", teamId: 7, teamName: teams[6].name,},
    {id: 40, name: "Guanyu Zhou", teamId: 7, teamName: teams[6].name,},
];

//interface para os parâmetros de consulta
interface QueryParams {
    id: string;
}

app.get("/teams", async (request, response) => {
    response.type("application/json");
    response.status(200);
    return {teams};
});

app.get("/drivers", async (request, response) => {
    response.type("application/json");
    response.status(200);
    return {drivers};
  
});

app.get("/drivers/:id", async (request, response) => {
    const params = request.params as QueryParams;
    const driver = drivers.find(d => d.id === Number(params.id));

    if (!driver) {
        response.status(404).send({ error: "Driver not found" });
        return;
    }

    response.type("application/json");
    response.status(200);
    return { driver };
});     

app.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running at ${address}`);
});