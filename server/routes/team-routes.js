import express from 'express';
import {getTeamsController, createTeamController} from'../controllers/team-controller';

const teamRouter = express.Router();

teamRouter.route('/')
  .get(getTeamsController);

teamRouter.route('/')
  .post(createTeamController);

export default teamRouter;