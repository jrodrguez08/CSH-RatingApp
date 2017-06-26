import _ from 'lodash';
import {getAllEntities, createEntity} from './helpers/db-service';
import Team from '../models/team';

export function getTeamsService() {
  return getAllEntities(Team);
}

export function createTeamService(user) {
  return createEntity(Team, user);
}