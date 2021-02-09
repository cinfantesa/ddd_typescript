import 'reflect-metadata';
import {InversifyExpressServer} from 'inversify-express-utils';
import bodyParser from 'body-parser';
import './infrastructure/rest/put-register-user.controller';
import ContainerConfiguration from './container.configuration';

let server: InversifyExpressServer = new InversifyExpressServer(new ContainerConfiguration().container);
server.setConfig((app) => {
    app.use(bodyParser.json());
});

server.build().listen(3000);

console.log('Server started on port 3000');