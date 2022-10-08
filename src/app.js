import {Router} from 'helphack-router'
import {DirectionsController} from "./Directions/DirectionsController.js";
import {DirectionsService} from "./Directions/DirectionsService.js";
import {MapApi} from "./MapApi/MapApi.js";
import createRabbitManager from './mq/createQueueManager.js'
import {BestTimeApi} from "./BestTimeApi/BestTimeApi.js";


export class App {
  start = async () => {
    console.log('start')
    this.queueManager = await createRabbitManager();
    this.router = new Router(this.queueManager);

    this.mapApi = new MapApi()
    this.bestTimeApi = new BestTimeApi()
    this.directionsService = new DirectionsService(this.mapApi, this.bestTimeApi)
    this.directionsController = new DirectionsController(this.router, this.directionsService)
    // 50.262416, 19.03570050.257670, 19.020345
    // await this.directionsService.getDirections({lng: 19.035700, lat: 50.262416}, {lng: 19.020345, lat: 50.257670}, 'driving', 10)
  }

}