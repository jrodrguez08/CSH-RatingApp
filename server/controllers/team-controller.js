import processResponse from './helpers/process-response';
import {createTeamService, getTeamsService} from '../services/team-service';

export function createTeamController(req, res) {
  processResponse(res, createTeamService, req.body.team);
}

export function getTeamsController(req, res) {
  processResponse(res, getTeamsService);
}

export function getTeamByIdController (req, res) {
  processResponse(res, getTeamByIdService, req.params.id);
}

export function getTeamPlayers(Controllerreq, res) {
  const defaultLimit = 30;
  const params = {
    teamId: req.params.id,
    limit: parseInt(req.params.limit) || defaultLimit
  };
  processResponse(res, getTeamPlayersService, params);
}

export function updateTeamController(req, res) {
  processResponse(res, updateTeamService, req);
}
