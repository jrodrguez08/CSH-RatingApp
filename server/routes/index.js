import teamRouter from './team-routes';

export default function(app) {
  app.use('/teams', teamRouter);
}