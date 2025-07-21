// const airplane = require('../models/airplane');
const { StatusCodes } = require('http-status-codes');
const {  AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
// const { Console } = require('winston/lib/winston/transports');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        // console.log("inside service");
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        // console.log(error);
        if(error.name == 'SequelaizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError('explanation', StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch(error){
        throw new AppError('Cannot fetch all the data of airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}