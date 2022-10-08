import {msgbus} from "helphack-router";

const URL = process.env.RABBIT_URL || "localhost:5672";
const USER = process.env.RABBIT_USER || "guest";
const PASSWORD = process.env.RABBIT_PASS || "guest";

const createRabbitManager  = async () => new msgbus(`amqp://${USER}:${PASSWORD}@${URL}/`, {
    exchange: { mandatory: true, immediate: true }
});

export default createRabbitManager